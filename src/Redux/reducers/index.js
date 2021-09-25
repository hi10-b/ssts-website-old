import { combineReducers } from 'redux';
import { eventReducer, topGridEventReducer } from './eventsReducer';
const reducers = combineReducers({
	allEvents: eventReducer,
	topGridEvents: topGridEventReducer,
});
export default reducers;
