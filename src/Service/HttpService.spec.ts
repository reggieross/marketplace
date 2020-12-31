import fetchMock from 'jest-fetch-mock';
import { HttpService } from './HttpService';

describe('Http Client', () => {
  describe('Get ', () => {
    it('Should use fetch with the correct props', async () => {
      fetchMock.mockResolvedValue({ json: jest.fn() } as any);
      await HttpService.get('http://www.google.com');
      expect(fetchMock).toBeCalledWith('http://www.google.com', {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
      });
    });

    it('Should use return the body of the response', async () => {
      fetchMock.mockResolvedValue({
        status: 200,
        json: async () => ({ hello: 'world' }),
      } as any);
      const res = await HttpService.get('http://www.google.com');
      expect(res).toEqual({
        responseObj: {
          hello: 'world',
        },
        statusCode: 200,
      });
    });
  });
});
