import { IRequestState } from '../models/request';

const extractActionType = (actionType: string) => actionType.split('/').pop();
const extractActionDomain = (actionType: string) => actionType.split('/').shift();

const initialState: IRequestState = {
  loader: {
    actions: []
  }
};

export const requestsReducer = (state = initialState, { type, payload }): IRequestState => {
  const actionDomain = extractActionDomain(type);
  const actionType = extractActionType(type);

  const { loader } = state;
  const { actions } = loader;

  switch (actionType) {
    case 'REQUEST':
    case 'TRIGGER':
      return {
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
          actions: actions.filter(action => action.name !== actionDomain)
        }
      };
    case 'FAILURE':
      return {
        ...state,
        loader: {
          ...loader,
          actions: actions.filter(action => action.name !== actionDomain)
        }
      };
    default:
      return state;
  }
};
