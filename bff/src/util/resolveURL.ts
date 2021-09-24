import {ENV} from "../env";

export type Environment = 'dev' | 'prd';
export enum ServiceDefinition {
  CATALOG_GQL = 'catalog-gql'
}

export function resolveURL(serviceName: ServiceDefinition, environment: Environment): string {
  return isLocal(serviceName)
    ? `http://${resolveLocalEnv(serviceName)}`
    : `https://${resolveHostName(serviceName, environment)}`;
}

function resolveHostName(serviceName: ServiceDefinition, environment: Environment): string {
  return `${serviceName}.herokuapp.com`
}

function isLocal(serviceName: ServiceDefinition) {
  return ENV.LOCAL_SERVICES.includes(serviceName);
}

const resolveLocalEnv = (serviceName: ServiceDefinition): string | undefined => {
  switch (serviceName) {
    case ServiceDefinition.CATALOG_GQL:
      return 'localhost:5001';
    default:
      return 'localhost:5000';
  }
};
