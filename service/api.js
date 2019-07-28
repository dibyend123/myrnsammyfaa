const BASE_URL="aaa";

export const api = async (url,method,body=null,header={}) => {

	try{

		const endPoint = BASE_URL.concat(url);
		const reqBody = body ? JSON.stringify(body):null

		const fetchParams = { method,headers }
	
		if((method==="POST"  && method==="PUT" ) && !reqBody){
			throw new Error("Request Body Required");
		}

		if(reqBody){
			fetchParams.headers["Content-type"] = "application/json";		
 			fetchParams.body = fetchParams;
		}

		const fetchPromise = fetch(endPoint,fetchParams);
	
		const timeOutPromise = new Promise((resolve,reject)=>{
			setTimeout(()=>{
				reject();
			},10000);
		});

		const response = Promise.race([fetchPromise,timeOutPromise]);

		return response;
	}catch(e){
		throw new Error(e); 
	}


}

export const fetchApi = (url,method,body,statusCode,token=null,loader=false) =>{
	try{
				
		const headers = {}
		if(token){
		   headers["x-auth"] = token;
		}

		const response = await api(url,method,body,headers);

		if(response.status===statusCode){
			const responseBody = await response.json();
			return r;esponseBody
			
		}

		throw response;

	}catch(error) {
		throw error;
	}
	
}










