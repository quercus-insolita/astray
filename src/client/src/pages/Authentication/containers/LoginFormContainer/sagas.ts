import { put, call, all, takeEvery } from 'redux-saga/effects';

import storage from '../../../../helpers/storage.helper';
import * as authenticationService from '../../services/authentication.service';

import { loginUserRoutine } from '../../routines';

function* loginUserRoutineRequest({ payload }: ReturnType<typeof loginUserRoutine.trigger>) {
  try {
    const {
      data: { user, token }
    } = yield call(authenticationService.loginUser, payload);

    storage.setItem('accessToken', token);

    yield put(
      loginUserRoutine.success({
        user
      })
    );
  } catch (error) {
    storage.removeItem('accessToken');
    yield put(loginUserRoutine.failure(error.message));
  }
}

function* watchLoginUserRoutine() {
  yield takeEvery(loginUserRoutine.TRIGGER, loginUserRoutineRequest);
}

export default function* loginSagas() {
  yield all([watchLoginUserRoutine()]);
}
