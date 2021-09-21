import { HttpClient, ResponseEntity } from './client/HttpService';
import { AuthenticationService } from './AuthenticationService';

describe('Authentication Service', () => {
  it('Should return the Auth token from the HttpResponse', async () => {
    const headers = {
      get: (val: string) => 'access_token=some_token',
    } as Headers;

    const mockResponseEntity: ResponseEntity = {
      statusCode: 200,
      headers: headers,
      responseObj: {},
    };
    const postSpy = jest.spyOn(HttpClient, 'post');
    postSpy.mockResolvedValue(mockResponseEntity);

    const success = await AuthenticationService.login(
      'some-username',
      'some-password'
    );

    expect(success).toEqual(true);
  });
});
