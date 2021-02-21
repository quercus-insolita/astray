import { put, call, all, takeEvery } from 'redux-saga/effects';

import * as reportService from '../../services/reports.service';

import { addReportRoutine } from '../../routines';

function* addReportRoutineRequest({ payload }) {
  try {
    const response = yield call(reportService.createReport, payload);

    yield put(addReportRoutine.success());
  } catch (error) {
    yield put(addReportRoutine.failure(error.message));
  }
}

function* watchAddReportRoutine() {
  yield takeEvery(addReportRoutine.TRIGGER, addReportRoutineRequest);
}

export default function* reportSagas() {
  yield all([watchAddReportRoutine()]);
}
