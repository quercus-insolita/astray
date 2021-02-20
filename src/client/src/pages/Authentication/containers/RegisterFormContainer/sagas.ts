import { put, call, all, takeEvery } from 'redux-saga/effects';

import storage from '../../../../helpers/storage.helper';
import * as authenticationService from '../../services/authentication.service';

import { registerUserRoutine } from '../../routines';

function* registerUserRoutineRequest({ payload }: ReturnType<typeof registerUserRoutine.trigger>) {
  try {
    const { user, accessToken } = yield call(authenticationService.registerUser, payload);

    storage.setItem('accessToken', accessToken);

    yield put(
      registerUserRoutine.success({
        user
      })
    );
  } catch (error) {
    storage.removeItem('accessToken');
    yield put(registerUserRoutine.failure(error.message));
  }
}

function* watchRegisterUserRoutine() {
  yield takeEvery(registerUserRoutine.TRIGGER, registerUserRoutineRequest);
}

export default function* registerSagas() {
  yield all([watchRegisterUserRoutine()]);
}
