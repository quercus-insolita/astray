import { loginUserRoutine } from '../../../pages/Authentication/routines';
import { getCurrentUserRoutine } from '../routines';

const initialState = {
  email: ''
};

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case loginUserRoutine.SUCCESS:
    case getCurrentUserRoutine.SUCCESS: {
      const { user } = action.payload;

      return {
        ...state,
        ...user
      };
    }
    default:
      return state;
  }
};
