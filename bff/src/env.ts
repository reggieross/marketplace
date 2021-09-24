export const ENV = {
  PORT: process.env.PORT || '3001',
  ENVIRONMENT: process.env.ENVIRONMENT || 'local',
  LOCAL_SERVICES: ['catalog-gql'],
  SERVICE_USERNAME: process.env.SERVICE_USERNAME,
  SERVICE_PASSWORD: process.env.SERVICE_PASSWORD,
  AUTHENTICATION_HOST: process.env.AUTHENTICATION_HOST,
};