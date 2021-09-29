import fetch from 'node-fetch';
import { Response } from 'node-fetch';
import { CookieMonster, ServiceCookie } from './CookieClient';

export interface ResponseEntity {
  responseObj: any;
  statusCode: number;
  message?: string;
}

export class HttpClient {
  public static async get(
    url: string,
    extraData?: { cookie: ServiceCookie }
  ): Promise<ResponseEntity> {
    let headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (extraData && extraData.cookie) {
      headers = {
        ...headers,
        Cookies: CookieMonster.encodeCookie(extraData.cookie),
      };
    }

    return fetch(url, {
      method: 'GET',
      headers,
    }).then(
      async (response: Response) => await HttpClient.handleResponse(response)
    );
  }

  public static async post(url: string, body: any): Promise<ResponseEntity> {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(
      async (response: Response) => await HttpClient.handleResponse(response)
    );
  }

  private static async handleResponse(
    response: Response
  ): Promise<ResponseEntity> {
    const responseObj = await response.json();
    return {
      responseObj,
      statusCode: response.status,
    };
  }
}
