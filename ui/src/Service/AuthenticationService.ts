import { HttpService } from './HttpService';
import {UserInfo} from "./service.types";
import {ENV} from "../env";


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

  return res.statusCode === 200
    ? ResponseType.SUCCESS
    : { status: res.statusCode, message: '' };
};

const validateToken = async (
  accessToken: string
): Promise<ValidateTokenResponse> => {
  return { isValid: true };
};

export const AuthenticationService = {
  login,
  validateToken,
};
