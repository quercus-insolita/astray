import { combineReducers } from 'redux';

import { reports } from '../pages/Listings/reducers';
import { currentUser } from '../shared/User/reducers';
import { requestsReducer } from './requestsReducer';

const rootReducer = combineReducers({ currentUser, reports, requests: requestsReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
