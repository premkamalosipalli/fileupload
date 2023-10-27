import { request } from '@umijs/max';

export async function loginLog(params: API.UserLoginBodyDataType) {
  // @ts-ignore
  return request<API.ResponseDataType>('/api/v1/user/login', {
    method: 'POST',
    params: params,
  })
    .then((response: any) => {
      return response;
    })
    .catch(function (error: any) {
      // console.log('api/v1/user/login catch error', error);
      return error;
    });
}
