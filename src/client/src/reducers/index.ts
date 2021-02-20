import { combineReducers } from 'redux';

import { currentUser } from '../shared/User/reducers';
import { requestsReducer } from './requestsReducer';

const rootReducer = combineReducers({ currentUser, requests: requestsReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
