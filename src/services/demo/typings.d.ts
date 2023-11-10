/* eslint-disable */
// 该文件由 OneAPI 自动生成，请勿手动修改！

declare namespace API {
  interface PageInfo {
    /** 
1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<Record<string, any>>;
  }

  interface PageInfo_UserInfo_ {
    /** 
1 */
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<UserInfo>;
  }

  interface Result {
    success?: boolean;
    errorMessage?: string;
    data?: Record<string, any>;
  }

  interface Result_PageInfo_UserInfo__ {
    success?: boolean;
    errorMessage?: string;
    data?: PageInfo_UserInfo_;
  }

  interface Result_UserInfo_ {
    success?: boolean;
    errorMessage?: string;
    data?: UserInfo;
  }

  interface Result_string_ {
    success?: boolean;
    errorMessage?: string;
    data?: string;
  }

  type UserGenderEnum = 'MALE' | 'FEMALE';

  interface UserInfo {
    id?: string;
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
    gender?: UserGenderEnum;
  }

  interface UserInfoVO {
    name?: string;
    /** nick */
    nickName?: string;
    /** email */
    email?: string;
  }

  type definitions_0 = null;

  type UserLoginBodyDataType = {
    id?: number;
    email?: string;
    password?: string;
    remember?: boolean;
  };

  type UserRegisterBodyDataType = {
    firstName?: string;
    email?: string;
    lastName?: string;
    password?: string;
  };

  type UserResponseDataType = {
    success?: true;
    message?: string;
    code?: string;
    data?: UserLoginBodyDataType;
  };

  type FileUploadFormData = {
    file: File; // Assuming you're using the File type for the uploaded file
    userId: string; // Use the appropriate type for the user ID
  };

  type FileUploadStatus = {
    success?: true;
    message?: string;
    code?: string;
    data?: FileUploadFormData;
  };
}
