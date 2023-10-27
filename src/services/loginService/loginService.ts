import { loginLog } from './loginApi';

export async function userLoginService(params: API.UserLoginBodyDataType) {
  return await loginLog(params);
}
