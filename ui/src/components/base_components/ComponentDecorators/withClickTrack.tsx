import React from 'react';
import { AnalyticsClient } from '../../../clients/AnalyticsClient';

interface WithClickTrackProps {
  clickEventName: string;
}

interface ClickProps {
  onClick?: () => void;
}

const logClick = (eventName: string) => {
  AnalyticsClient.logClick(eventName).then(() => {});
};

export const withClickTrack = <P extends ClickProps>(
  Component: React.ComponentType<P>
) =>
  class WithClickTrack extends React.Component<P & WithClickTrackProps> {
    render() {
      const { clickEventName, onClick, ...props } = this.props;
      const handleClick = () => {
        logClick(clickEventName);
        if (onClick) {
          onClick();
        }
      };
      return <Component {...(props as P)} onClick={handleClick} />;
    }
  };
