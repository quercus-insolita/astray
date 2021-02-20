import { getReportsRoutine } from '../routines';

export const reports = (state = [], action) => {
  switch (action.type) {
    case getReportsRoutine.SUCCESS: {
      return state;
    }
    default:
      return state;
  }
};
