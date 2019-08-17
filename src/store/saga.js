import { all, call } from 'redux-saga/effects';
import { mainWatcherSaga } from 'ducks/main';

function* rootSaga() {
  try {
    yield all([
      call(mainWatcherSaga),
    ]);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default rootSaga;
