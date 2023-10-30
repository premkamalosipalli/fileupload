import { loginLog } from './loginApi';

export async function userLoginService(data?: any) {
  return await loginLog(data);
}
