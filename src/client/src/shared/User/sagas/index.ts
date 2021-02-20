import { put, call, all, takeEvery } from 'redux-saga/effects';

import storage from '../../../helpers/storage.helper';
import * as authenticationService from '../services/authentication.service';

import { getCurrentUserRoutine } from '../routines';

function* getCurrentUserRequest() {
  try {
    const { user } = yield call(authenticationService.getCurrentUser);

    yield put(
      getCurrentUserRoutine.success({
        user
      })
    );
  } catch (error) {
    storage.removeItem('accessToken');
    yield put(getCurrentUserRoutine.failure(error.message));
  }
}

function* watchGetCurrentUserRoutine() {
  yield takeEvery(getCurrentUserRoutine.TRIGGER, getCurrentUserRequest);
}

export default function* userSagas() {
  yield all([watchGetCurrentUserRoutine()]);
}
