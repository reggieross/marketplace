import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import styles from './accountLink.module.scss';

interface AccountLinkProps {
  user?: string,
  color?: string
}

export class AccountLink extends React.Component<AccountLinkProps> {
  render() {
    const {color} = this.props;
    return (
      <div style={{color}} className={styles['account-link-root']}>
        <FontAwesomeIcon size={'lg'} icon={faUser} />
      </div>
    )
  }
}