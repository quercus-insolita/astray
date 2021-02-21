import { createRoutine } from 'redux-saga-routines';

export const getCurrentUserRoutine = createRoutine('GET_CURRENT_USER');

export const logoutUserRoutine = createRoutine('LOGOUT_USER');
