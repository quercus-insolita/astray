import { put, call, all, takeEvery } from 'redux-saga/effects';

import * as listingService from '../../services/listing.service';

import { getReportsRoutine } from '../../routines';

function* getReportsRoutineRequest({ payload }) {
  try {
    const response = yield call(listingService.getReportsList, payload);

    yield put(
      getReportsRoutine.success({
        reports: []
      })
    );
  } catch (error) {
    yield put(getReportsRoutine.failure(error.message));
  }
}

function* watchGetReportsRoutine() {
  yield takeEvery(getReportsRoutine.TRIGGER, getReportsRoutineRequest);
}

export default function* listingSagas() {
  yield all([watchGetReportsRoutine()]);
}
