import React from 'react';
import styles from './LoginForm.module.scss';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, InputBase } from '@material-ui/core';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import { Button } from '../../base_components/Button/Button';

export const LoginForm: React.FC<{
  submitting: boolean;
  error?: string;
  onLogin: (username: string, password: string) => void;
}> = ({ submitting, error, onLogin }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onChange = React.useCallback(
    (target: 'username' | 'password') => (event: any) => {
      switch (target) {
        case 'password':
          setPassword(event.target.value);
          break;
        case 'username':
          setUsername(event.target.value);
      }
    },
    []
  );

  const onShowPasswordClick = React.useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const onSubmit = React.useCallback(() => {
    onLogin(username, password);
  }, [username, password]);

  const disabledSubmit = password.length === 0 || username.length === 0;
  return (
    <div className={styles['root']}>
      <div className={styles['login-content']}>
        {error && (
          <Typography aria-label={'error-message'} className={styles['error']}>
            {error}
          </Typography>
        )}
        <h1>Login</h1>
        <div className={styles['form-input']}>
          <InputBase
            id={'username'}
            onChange={onChange('username')}
            placeholder="Username"
            inputProps={{ 'aria-label': 'username' }}
            inputComponent={'input'}
          />
          <div className={styles['password-input']}>
            <InputBase
              id={'password'}
              onChange={onChange('password')}
              placeholder="Password"
              inputProps={{ 'aria-label': 'password' }}
              inputComponent={'input'}
              type={showPassword ? 'text' : 'password'}
              value={password}
            />
            {!showPassword ? (
              <VisibilityOutlinedIcon onClick={onShowPasswordClick} />
            ) : (
              <VisibilityOffOutlinedIcon onClick={onShowPasswordClick} />
            )}
          </div>
        </div>
        <div>
          <Button
            onClick={disabledSubmit ? () => {} : onSubmit}
            disabled={disabledSubmit}
          >
            {submitting ? (
              <CircularProgress style={{ height: '20px', width: '20px' }} />
            ) : (
              'Submit'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
