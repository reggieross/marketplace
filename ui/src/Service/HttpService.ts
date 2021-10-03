export interface ResponseEntity<T> {
  responseObj: T;
  statusCode: number;
  message?: string;
}

export class HttpService {
  public static async get<T>(url: string): Promise<ResponseEntity<T>> {
    return fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(
      async (response: Response) => await HttpService.handleResponse<T>(response)
    );
  }

  public static async post<T,U>(url: string, body: T): Promise<ResponseEntity<U>> {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(
      async (response: Response) => await HttpService.handleResponse<U>(response)
    );
  }

  private static async handleResponse<T>(
    response: Response
  ): Promise<ResponseEntity<T>> {
    const responseObj = await response.json() as T;
    return {
      responseObj,
      statusCode: response.status,
    };
  }
}
