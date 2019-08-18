import { fetchMarketList } from './routines';
import { fromJS } from 'immutable';

/*

FAILURE: "--/FAILURE"
FULFILL: "--/FULFILL"
REQUEST: "--/REQUEST"
SUCCESS: "--/SUCCESS"
TRIGGER: "--/TRIGGER"

*/

const initialState = fromJS({
  loading: false,
  error: null,
  items: [],
});

const handleSuccess = (state, { payload }) => state.merge({ items: payload });

const handleTrigger = state => state.set('loading', true);
const handleFulfill = state => state.set('loading', false);
const handleFailure = (state, { payload }) => state.merge({ error: payload });

const handlers = {
  [fetchMarketList.TRIGGER]: handleTrigger,
  [fetchMarketList.SUCCESS]: handleSuccess,
  [fetchMarketList.FAILURE]: handleFailure,
  [fetchMarketList.FULFILL]: handleFulfill,
  //
};

const reducer = (state = initialState, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

export default reducer;
