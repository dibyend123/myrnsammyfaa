import { combineReducers } from 'redux';

const initialState = {
	user:null,
	isLoggedIn:false,
	isError:false,
	errors:null

}

const checkUser = (state={},action) => {
	return state;
}

export default combineReducers(checkUser);


