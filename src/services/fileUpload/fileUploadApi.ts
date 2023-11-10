import { message } from 'antd';
import { request } from '@umijs/max';
// @ts-ignore
import API from '@/services/demo/typings.t.ds';

const backendApiBaseUrl = 'http://localhost:8080';
export async function uploadFile(file: any, userId: any) {
  const headers = {
    authorization: 'authorization-text',
  };
  const formData = new FormData();
  formData.append('file', file);
  formData.append('userId', userId);

  return request<API.UserResponseDataType>(
    `${backendApiBaseUrl}/api/v1/fileUpload`,
    {
      method: 'POST',
      headers,
      data: formData,
    },
  );
}
