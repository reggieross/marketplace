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

const deleteCookie = (cookieName: CookieType): void => {
  return Cookies.remove(cookieName);
};

function _parseCookie(cookie: string): Record<string, string | number | boolean> {
  return cookie.split(';').reduce((acc: Record<string, string | number | boolean>, cookieKeyValue) => {
    const keyPairLen = 2;
    const keyIndex = 0;
    const valueIndex = 1;
    const spiltVal = cookieKeyValue.split('=');
    if (spiltVal.length === keyPairLen) {
      return {
        ...acc,
        [spiltVal[keyIndex]]: spiltVal[valueIndex],
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
