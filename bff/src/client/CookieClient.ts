import { Request } from 'express';
import { parse } from 'cookie';

export interface ServiceCookie {
  access_token?: string;
}

export class CookieMonster {
  static get = (req: Request, value: keyof ServiceCookie) => {
    const cookie = parse(req.header('cookie') || req.header('cookies') || '');
    return cookie[value];
  };

  static encodeCookie = (cookie: ServiceCookie): string => {
    return Object.entries(cookie)
      .reduce<string[]>((acc, [key, value]) => {
        return [`${key}=${value}`];
      }, [])
      .join(';');
  };
}
