import {CHANGE_SEARCH_FIELD} from './constants.js';

const intialState = {
	searchField: ''
}

export const searchRobots = (state = intialState, action = {}) => {
	switch(actions.type) {
<<<<<<< HEAD
		case CHANGE_SEARCH_FIELD:
		return Object.assign({}, state, { searchField: action.payload });
		default:
		return state;
=======
		case: CHANGE_SEARCH_FIELD:
		return Object.assign({}, state, searchField: action.payload);
		default:
			return state;
>>>>>>> bfaa2e21cc819290cd707a633fb89ea75ef51bb3
	}
}

