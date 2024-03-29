import { ENV } from '../env';
import { HttpService } from './HttpService';
import {HttpStatus} from '../../../shared/src/const/HttpStatus';
import { UserInfo } from './service.types';
const authServiceURI = ENV.AUTHENTICATION_URL;
export enum ResponseType {
  SUCCESS,
}

export type LoginResp =
  | ResponseType
  | {
      status: number;
      message: string;
    };

export interface ValidateTokenResponse {
  isValid: boolean;
  user?: UserInfo;
}

const login = async (
  username: string,
  password: string
): Promise<LoginResp> => {
  const res = await HttpService.post(`${authServiceURI}/login/user`, {
    username,
    password,
  });

  return res.statusCode === HttpStatus.COMPLETE
    ? ResponseType.SUCCESS
    : { status: res.statusCode, message: '' };
};

const validateToken = async (
  accessToken: string
): Promise<ValidateTokenResponse> => {
  return { isValid: !!accessToken };
};

export const AuthenticationService = {
  login,
  validateToken,
};
