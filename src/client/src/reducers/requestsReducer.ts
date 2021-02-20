import uniq from 'lodash/uniq';

import { IRequestState } from '../models/request';

const extractActionType = (actionType: string) => actionType.split('/').pop();
const extractActionDomain = (actionType: string) => actionType.split('/').shift();

const initialState: IRequestState = {
  loader: {
    actions: [],
    refreshing: [],
    fulfilled: []
  }
};

export const requestsReducer = (state = initialState, { type, payload }): IRequestState => {
  const actionDomain = extractActionDomain(type);
  const actionType = extractActionType(type);

  const { loader } = state;
  const { actions, refreshing, fulfilled } = loader;

  if (type === 'persist/REHYDRATE') {
    return {
      loader: {
        fulfilled: payload ? payload.ui.loader.fulfilled : [],
        actions: [],
        refreshing: []
      }
    };
  }

  switch (actionType) {
    case 'REQUEST':
    case 'TRIGGER':
      return payload?.refreshing
        ? {
            ...state,
            loader: {
              ...loader,
              refreshing: [...refreshing, actionDomain]
            }
          }
        : {
            ...state,
            loader: {
              ...loader,
              actions: [...actions, { name: actionDomain, payload }]
            }
          };

    case 'SUCCESS':
      return {
        ...state,
        loader: {
          ...loader,
          actions: actions.filter(action => action.name !== actionDomain),
          refreshing: refreshing.filter(refresh => refresh !== actionDomain),
          fulfilled: uniq([...fulfilled, { name: actionDomain, payload }])
        }
      };
    case 'FAILURE':
      return {
        ...state,
        loader: {
          ...loader,
          actions: actions.filter(action => action.name !== actionDomain),
          refreshing: refreshing.filter(refresh => refresh !== actionDomain),
          fulfilled: fulfilled.filter(fulfill => fulfill.name !== actionDomain)
        }
      };
    default:
      return state;
  }
};
