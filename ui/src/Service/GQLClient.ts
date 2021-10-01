import { ApolloClient, DefaultOptions } from 'apollo-client';
import { GqlService, createService } from '../generated/serviceFactory';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const defaultOptions: DefaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
  },
};

const client = new ApolloClient({
  link: createHttpLink({
    uri: '/gql-gateway/graphql',
    credentials: 'include',
  }),
  cache: new InMemoryCache(),
  defaultOptions,
});

let gqlService: GqlService;

export const getGQLClient = (): GqlService => {
  if (!gqlService) {
    gqlService = createService(client);
  }

  return gqlService;
};
