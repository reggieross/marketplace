import { ApolloClient, DefaultOptions } from 'apollo-client';
import { createService, GqlService } from '../generated/serviceFactory';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const defaultOptions: DefaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
  },
};

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'https://marketplace-gateway.herokuapp.com/graphql',
  }),
  cache: new InMemoryCache(),
  defaultOptions,
});

let gqlService: GqlService;

export const getGQLService = (): GqlService => {
  if (!gqlService) {
    gqlService = createService(client);
  }

  return gqlService;
};
