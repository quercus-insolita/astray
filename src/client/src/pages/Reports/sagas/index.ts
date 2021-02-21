import { all } from 'redux-saga/effects';

import reportSagas from '../containers/ReportFormContainer/sagas';

export default function* rootSaga() {
  yield all([reportSagas()]);
}
