import { loginUserRoutine } from '../../../pages/Authentication/routines';
import { getCurrentUserRoutine, logoutUserRoutine } from '../routines';

const initialState = {
  isAuthenticated: false,
  email: ''
};

export const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case loginUserRoutine.SUCCESS:
    case getCurrentUserRoutine.SUCCESS: {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        ...user
      };
    }
    case logoutUserRoutine.SUCCESS: {
      return {
        ...state,
        isAuthenticated: false
      };
    }
    default:
      return state;
  }
};
