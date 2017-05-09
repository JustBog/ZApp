import { put, fork, select } from 'redux-saga/effects';
import { frontPageSagas } from '../areas/frontPage/sagas';

export default function* rootSaga() {
  yield fork(frontPageSagas);
}
