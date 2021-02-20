import { all } from 'redux-saga/effects';

import loginSagas from '../containers/LoginFormContainer/sagas';
import registerSagas from '../containers/RegisterFormContainer/sagas';

export default function* rootSaga() {
  yield all([loginSagas(), registerSagas()]);
}
