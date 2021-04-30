import { axiosInstance } from "./utilities";





export  const api = async function ({ method = "get", api, id, body, status = false, token = '', baseURL = "normal", email = "" }) {
	console.log('body-------->')
    return await new Promise((resolve, reject) => {
        axiosInstance.defaults.headers.common['authorization'] = ` ${localStorage.getItem('AuthToken') === null ? '' : localStorage.getItem('AuthToken')}`
    axiosInstance.post(getMicroServiceURL(baseURL)+ api,body).then(function (response) {
      // handle success
      console.log(response);
      resolve(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      reject(error)
    })

})
}













var statusHelper = (status, data) => {

	if (status) {
		return {
			status: data.status,
			...data.data
		}
	} else {
		return data.data
	}
}




// local api base url
let getMicroServiceURL = (baseURL) => {

	switch (baseURL) {
		// case 'normal':
		// 	return CONFIG.API_URL;
		case 'graphql':
			return 'https://xgahl82vc5.execute-api.us-east-2.amazonaws.com/dev/';
		case 'test':
			return 'https://jsonplaceholder.typicode.com';
		default:
			break;
	}

}



export const apiServiceURL = (baseURL = 'normal') => {

	return getMicroServiceURL(baseURL)

}