import { combineReducers } from 'redux';

//const initialState = {
//	user:null,
//	isLoggedIn:false,
//	isError:false,
//	errors:null

//}

const checkUser = (state={},action) => {

	switch(action.type){
		case "LOGIN_CHECK_LOADING":
		  return{
			  isLoading:true,
			  userId:null,
			  userName:null,
			  isError:false,
			  isSuccess:false,
			  error:null,
                          isLoggedin:false			
		  }
		case "USER_LOGIN_SUCCESS":
		   return{
			  isLoading:false,
			  userId:action.userId,
			  userName:action.userName,
			  isError:false,
			  isSuccess:true,
			  error:null,
			  isLoggedin:true
			}
               case "USER_LOGIN_FAILURE":
		   return{
			  isLoading:false,
			  userId:null,
			  userName:null,
			  isError:true,
			  isSuccess:false,
			  error:"User login Failed",
			  isLoggedin:false
		}	
		default :
		   return state;
	}	
	return state;
}

export default combineReducers({checkUser});


