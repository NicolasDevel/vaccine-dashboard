import { combineReducers } from 'redux';

//Imports reducers
import { reducer as dashboardReducer } from './dashboard/reducer';

export const rootReducer = combineReducers({
   dashboard    :   dashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;