import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { CookieMonster } from './client/CookieClient';

export class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest<Context>({ request, context }) {
    request.http.headers.set('x-token', context.token);
  }
}
