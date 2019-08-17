import { createRoutine } from 'redux-saga-routines';
import { GET_MARKET_LIST } from './types';

export const fetchMarketList = createRoutine(GET_MARKET_LIST);
