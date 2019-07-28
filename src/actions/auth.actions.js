import {fetchApi} from "../service/api";

export const checkUser = (payload) => {

	return async (dispatch)=> {

		try{
			dispatch({type:"LOGIN_CHECK_LOADING"});			
			const response =await fetchApi("/user/create","POST",payload,200);

			console.log(response);

			if(response.success){
				dispatch({
					type:"USER_LOGIN_SUCCESS",
					userId:response.userId,
					userName:"BatMan"
					});
				dispatch({
					type:"GET_USER_SUCCESS",
					userId:response.userId,
					userName:"BatMan"
					});
			}else{

				throw response;
			}			
			
		}catch(e){
			dispatch({
					type:"USER_LOGIN_FAILURE"
			});
		}
	}
}
