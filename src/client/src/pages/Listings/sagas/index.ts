import { all } from 'redux-saga/effects';

import listingSagas from '../containers/ReportsListingContainer/sagas';

export default function* rootSaga() {
  yield all([listingSagas()]);
}
