import { all, fork } from 'redux-saga/effects';

import userSagas from '../shared/User/sagas';
import loginSagas from '../pages/Authentication/sagas';

export default function* rootSaga() {
  yield all([fork(userSagas), fork(loginSagas)]);
}
