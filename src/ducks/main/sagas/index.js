import { call, put, all, takeLatest } from 'redux-saga/effects';
import http from 'lib/http';
import { fetchMarketList } from '../routines';

export function* fetchMarketListSaga() {
  try {
    yield put(fetchMarketList.request());
    const response = yield call(
      [http, 'get'],
      'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    yield put(fetchMarketList.success(response.data));
  } catch (error) {
    yield put(fetchMarketList.failure(error));
  } finally {
    yield put(fetchMarketList.fulfill());
  }
}

export function* mainWatcherSaga() {
  yield all([takeLatest(fetchMarketList.TRIGGER, fetchMarketListSaga)]);
}
