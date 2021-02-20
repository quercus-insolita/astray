import { createSelector } from 'reselect';

import { RootState } from '../../reducers';

export const checkIfLoading = (state: RootState, ...actions): boolean => {
  const actionsToCheck = actions.map(type => type.split('/').shift());

  return state.requests.loader.actions.some(item => actionsToCheck.includes(item.name));
};

export const getRequestsState = createSelector([checkIfLoading], loading => ({
  loading
}));
