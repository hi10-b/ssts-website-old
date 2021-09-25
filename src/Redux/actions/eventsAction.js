import { ActionTypes } from '../constants/action-types';

export const setEvents = (events) => {
	return {
		type: ActionTypes.SET_EVENTS,
		payload: events,
	};
};

export const setTopGridEvents = (events) => {
	return {
		type: ActionTypes.SET_TOPGRID_EVENTS,
		payload: events,
	};
};
