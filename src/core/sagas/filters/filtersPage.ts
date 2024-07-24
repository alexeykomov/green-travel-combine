import {getFiltersDataRequest, getRegionsList} from 'core/actions';
import {takeEvery} from 'redux-saga/effects';
import {getFiltersDataSaga} from './getFiltersDataSaga';

export function* filtersSaga() {
  yield takeEvery([getFiltersDataRequest, getRegionsList], getFiltersDataSaga);
}
