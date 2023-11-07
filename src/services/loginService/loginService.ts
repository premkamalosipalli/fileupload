import { loginLog, registerUser } from './loginApi';

export async function userLoginService(data?: any) {
  return await loginLog(data);
}

export async function userRegisterService(data?: any) {
  return await registerUser(data);
}
