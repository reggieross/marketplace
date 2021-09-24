import {ENV} from './env';
import {AuthenticatedDataSource} from "./AuthenticatedDateSource";
import {Environment, resolveURL, ServiceDefinition} from "./util/resolveURL";
import {ApolloGateway} from "@apollo/gateway";

interface ServiceInfo {
  name: string;
  url: string;
}

const serviceList: ServiceInfo[] = [
  {
    name: ServiceDefinition.CATALOG_GQL,
    url: `${resolveURL(ServiceDefinition.CATALOG_GQL, ENV.ENVIRONMENT as Environment)}/graphql`,
  },
];

export const gateway = new ApolloGateway({
  serviceList,
});
