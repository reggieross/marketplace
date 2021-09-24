import { Request, Response, NextFunction } from 'express';
import { ReqAttributes } from '../const/ReqAttibutes';
import { AuthenticationClient } from '../client/AuthenticationClient';
import { parse } from 'cookie';
import { ENV } from '../env';
import { CookieMonster } from '../client/CookieClient';

export const authentication = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = CookieMonster.get(req, 'access_token');
  const validation = await AuthenticationClient.validateToken(token);

  if (!validation.valid && ENV.ENVIRONMENT !== 'local') {
    res
      .status(401)
      .send({ message: 'You must be logged in to use this service' });
  } else {
    const userInfo = {};

    req[ReqAttributes.USER_INFO] = userInfo;
    next();
  }
};
