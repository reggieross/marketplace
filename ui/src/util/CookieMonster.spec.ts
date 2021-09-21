import { CookieMonster } from './CookieMonster';

describe('Cookie Monster', () => {
  it('Should parse the cookie', () => {
    const parseValues = CookieMonster.parseCookie(
      'someValue=anotherValue;great=scott'
    );
    expect(parseValues).toEqual({
      someValue: 'anotherValue',
      great: 'scott',
    });
  });
});
