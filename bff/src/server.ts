import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { ApolloServer } from 'apollo-server-express';
import { gateway } from './gateway';
import { CookieMonster } from './client/CookieClient';

const serverConfig = {
  gateway,
  context: ({express}) => {
    return { token: CookieMonster.get(express.req, 'access_token') };
  },
};


//@ts-ignore
export const server = new ApolloServer(serverConfig);
//@ts-ignore
export const lambdaServer = new ApolloServerLambda(serverConfig);
