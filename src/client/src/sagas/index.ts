import { all, fork } from 'redux-saga/effects';

import userSagas from '../shared/User/sagas';
import loginSagas from '../pages/Authentication/sagas';
import listingSagas from '../pages/Listings/sagas';
import reportSagas from '../pages/Reports/sagas';

export default function* rootSaga() {
  yield all([fork(userSagas), fork(loginSagas), fork(listingSagas), fork(reportSagas)]);
}
