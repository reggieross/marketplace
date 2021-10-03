import { HttpService } from './HttpService';
import fetchMock from 'jest-fetch-mock';

describe('Http Client', () => {
  describe('Get ', () => {
    it('Should use fetch with the correct props', async () => {
      fetchMock.mockResolvedValue({ status: 200, json:  async () => ({ hello: 'world' }) } as Response);
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
      } as Response);
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
