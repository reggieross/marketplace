import { ENV } from '../env';
import { HttpClient } from './HttpClient';

const validateToken = async (access_token: string) => {
  if (!access_token) {
    return { valid: false };
  }
  const res = await HttpClient.get(
    `${ENV.AUTHENTICATION_HOST}/token/validate`,
    {
      cookie: { access_token },
    }
  );

  return res.responseObj as { valid: boolean };
};

export const AuthenticationClient = { validateToken };
