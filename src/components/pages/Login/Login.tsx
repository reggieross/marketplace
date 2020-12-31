import React from 'react';
import {
  AuthenticationService,
  LoginResp,
  ResponseType,
} from '../../../Service/AuthenticationService';
import { LoginForm } from '../../modules/LoginForm/LoginForm';
import { LocationState } from 'history';

export const Login: React.FC<{ history: LocationState }> = ({ history }) => {
  const { push } = history;
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setErrorMessage] = React.useState<string | undefined>();
  const routeTo = (path: string) => {
    push(path);
  };

  const getErrorMessage = (status?: number) => {
    switch (status) {
      case 401:
        return 'The username or password specified is not valid';
      default:
        return 'Sorry and error occurred. Please try again.';
    }
  };

  const onLogin = (username: string, password: string) => {
    if (password.length !== 0 && username.length !== 0) {
      setSubmitting(true);
      AuthenticationService.login(username, password)
        .then((res: LoginResp) => {
          if (res !== ResponseType.SUCCESS) {
            setErrorMessage(getErrorMessage(res.status));
          } else {
            routeTo('/');
          }
        })
        .catch(e => setErrorMessage(e.message))
        .finally(() => setSubmitting(false));
    }
  };

  return <LoginForm submitting={submitting} onLogin={onLogin} error={error} />;
};
