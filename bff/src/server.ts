import { ApolloServer } from 'apollo-server-express';
import { gateway } from './gateway';
import { CookieMonster } from './client/CookieClient';

export const server = new ApolloServer({
  gateway,
  context: ({ req }) => {
    return { token: CookieMonster.get(req, 'access_token') };
  },
});
