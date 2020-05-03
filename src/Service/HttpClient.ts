export interface ResponseEntity {
  responseObj: any;
  statusCode: number;
  message?: string;
}

export class HttpClient {
  public static async get(url: string): Promise<ResponseEntity> {
    return fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
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
