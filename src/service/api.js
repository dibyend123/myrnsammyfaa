const BASE_URL="http://localhost:8081";

export const api = async (url,method,body=null,headers={}) => {

	try{

		const endPoint = BASE_URL.concat(url);
		const reqBody = body ? JSON.stringify(body):null
		const fetchParams = { method,headers }
		if((method==="POST"  && method==="PUT" ) && !reqBody){
			throw new Error("Request Body Required");
		}
		if(reqBody){
			fetchParams.headers["Content-type"] = "application/json";		
 			fetchParams.body = reqBody;
		}

		const fetchPromise = fetch(endPoint,fetchParams);
	
		const timeOutPromise = new Promise((resolve,reject)=>{
			setTimeout(()=>{
				reject("Request TimeOut");
			},10000);
		});

		const response = Promise.race([fetchPromise,timeOutPromise]);

		return response;
	}catch(e){
		throw new Error(e); 
	}


}

export const fetchApi = async(url,method,body,statusCode,token=null,loader=false) =>{
	try{
				
		const headers = {}
		const result = {
			userId:null,
			success:false,
			responseBody:null
		}
		
		if(token){
		   headers["x-auth"] = token;
		}

		const response = api(url,method,body,headers);

                result.success=true;
		result.userId="dibcust";
		result.responseBody="{username:dibyendu,status:ok,address:kolkata140}"

		if(response.status===statusCode){
			const responseBody = await response.json();
			return result;
			
		}
		
		return result;

		throw response;

	}catch(error) {
		console.log("one");
		throw error;
	}
	
}










