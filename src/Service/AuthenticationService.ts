import { HttpClient } from './HttpClient';
import { CreateAccountRequest } from '../types/dataTypes';

const authServiceURI = 'https://marketplace-auth.herokuapp.com';

const login = async (username: string, password: string): Promise<boolean> => {
  const res = await HttpClient.post(`${authServiceURI}/login/user`, {
    username,
    password,
  });
  return res.statusCode === 200;
};

const createAccount = async (accountCreationRequest: CreateAccountRequest) => {
  const res = await HttpClient.post(
    `${authServiceURI}/account/create`,
    accountCreationRequest
  );

  return res.statusCode === 200;
};


export const AuthenticationService = {
  login,
  createAccount,
};
