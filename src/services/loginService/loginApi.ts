import { request } from '@umijs/max';

// Define the base URL for your backend API
const backendApiBaseUrl = 'http://localhost:8080';
export async function loginLog(data?: any) {
  // @ts-ignore
  return request<API.ResponseDataType>(
    `${backendApiBaseUrl}/api/v1/user/login`,
    {
      method: 'POST',
      data: data,
    },
  );
}
