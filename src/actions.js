import {CHANGE_SEARCH_FIELD} from './constants.js';

export const setSearchField = (text) => {
	console.log(text);
	return {
	type: 'CHANGE_SEARCH_FIELD',
	PAYLOAD: text
   }
}