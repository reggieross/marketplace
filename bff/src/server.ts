import { ApolloServer } from 'apollo-server-lambda';
import { gateway } from './gateway';
import { CookieMonster } from './client/CookieClient';

export const server = new ApolloServer({
  gateway,
  context: ({express}) => {
    return { token: CookieMonster.get(express.req, 'access_token') };
  },
});
