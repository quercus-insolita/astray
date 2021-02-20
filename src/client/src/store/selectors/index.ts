import { createSelector } from 'reselect';

import { RootState } from '../../reducers';

export const checkIfLoading = (state: RootState, ...actions): boolean => {
  const actionsToCheck = actions.map(type => type.split('/').shift());

  return state.requests.loader.actions.some(item => actionsToCheck.includes(item.name));
};

export const checkIfRefreshing = (state: RootState, ...actions): boolean => {
  const actionsToCheck = actions.map(type => type.split('/').shift());

  return state.requests.loader.refreshing.some(item => actionsToCheck.includes(item));
};

export const checkIfFulfilled = (state: RootState, ...actions): boolean => {
  const actionsToCheck = actions.map(type => type.split('/').shift());

  return state.requests.loader.fulfilled.some(item => actionsToCheck.includes(item));
};

export const getRequestsState = createSelector(
  [checkIfLoading, checkIfRefreshing, checkIfFulfilled],
  (loading, refreshing, fulfilled) => ({
    loading,
    refreshing,
    fulfilled
  })
);
