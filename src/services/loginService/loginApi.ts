import { request } from '@umijs/max';

// Define the base URL for your backend API
const backendApiBaseUrl = 'http://localhost:8080';
export async function loginLog(params: API.UserLoginBodyDataType) {
  // @ts-ignore
  return request<API.ResponseDataType>(
    `${backendApiBaseUrl}/api/v1/user/login`,
    {
      method: 'POST',
      params: params,
    },
  )
    .then((response: any) => {
      return response;
    })
    .catch(function (error: any) {
      // console.log('api/v1/user/login catch error', error);
      return error;
    });
}
