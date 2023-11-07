import { request } from '@umijs/max';
import API from '../demo/typings.d.ts';

// Define the base URL for your backend API
const backendApiBaseUrl = 'http://localhost:8080';
export async function loginLog(data?: API.UserLoginBodyDataType) {
  return request<API.UserResponseDataType>(
    `${backendApiBaseUrl}/api/v1/users/login`,
    {
      method: 'GET',
      params: data,
    },
  );
}

export async function registerUser(data?: API.UserRegisterBodyDataType) {
  return request<API.UserResponseDataType>(
    `${backendApiBaseUrl}/api/v1/users/register`,
    {
      method: 'POST',
      data: data,
    },
  );
}
