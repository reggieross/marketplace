import Cookies from 'js-cookie';
import memoizeOne from 'memoize-one';

export enum CookieType {
  USER = 'user',
  ACCESS_TOKEN = 'access_token',
}

const getCookie = <T>(cookieName: CookieType): T => {
  return Cookies.getJSON(cookieName) as T;
};

const setCookie = <T>(cookieName: CookieType, body: string): void => {
  Cookies.set(cookieName, body);
};

const deleteCookie = (cookieName: CookieType) => {
  return Cookies.remove(cookieName);
};

function _parseCookie(cookie: string): object {
  return cookie.split(';').reduce((acc: object, cookieKeyValue) => {
    const spiltVal = cookieKeyValue.split('=');
    if (spiltVal.length === 2) {
      return {
        ...acc,
        [spiltVal[0]]: spiltVal[1],
      };
    }

    return acc;
  }, {});
}

const parseCookie = memoizeOne(_parseCookie);

export const CookieMonster = {
  getCookie,
  setCookie,
  deleteCookie,
  parseCookie,
};
