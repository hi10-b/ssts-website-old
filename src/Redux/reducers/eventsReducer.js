import { ActionTypes } from '../constants/action-types';
const initState = {
	events: [],
	topGrid: [],
};

export const eventReducer = (state = initState, { type, payload }) => {
	console.log(`type: ${type} payload: ${payload}`);
	switch (type) {
		case ActionTypes.SET_EVENTS:
			return { ...state, events: payload };
		default:
			return state;
	}
};

export const topGridEventReducer = (state = initState, { type, payload }) => {
	console.log(`type: ${type} payload: ${payload}`);
	switch (type) {
		case ActionTypes.SET_TOPGRID_EVENTS:
			return { ...state, events: payload };
		default:
			return state;
	}
};
