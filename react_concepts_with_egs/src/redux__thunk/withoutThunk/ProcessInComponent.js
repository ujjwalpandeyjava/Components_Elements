import apiEndPoints from './apiEndPoints';
import { ADD_ANSWER, ADD_API_ERROR, ADD_QUESTION } from './redux/reduxReducers/CompanionChatSlice';


// instead of these use thunk, this approach is fine when working with api calls
export const RESOLVE_QUERY = (userQuery) => (dispatch) => {
	dispatch(ADD_QUESTION({ question: userQuery }));
	apiEndPoints.COMPANION_CHAT().resolveQuery(userQuery)
		.then(res => {
			if (res.status === 200)
				dispatch(ADD_ANSWER({ answer: res.data }))
		})
		.catch(err => {
			dispatch(ADD_API_ERROR({ errorMessage: `${err.message}, code: ${err.code}` }))
			return err.code;
		});
}


