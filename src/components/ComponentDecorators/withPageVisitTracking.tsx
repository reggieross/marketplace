import React from 'react';
import { AnalyticsClient } from '../../clients/AnalyticsClient';

interface WithPageVisitTrackingProps {
  pageName: string;
}

export const withClickTrack = <P extends object>(
  Component: React.ComponentType<P>
) =>
  class WithClickTrack extends React.Component<P & WithPageVisitTrackingProps> {
    componentDidMount(): void {
      AnalyticsClient.logPageView();
    }

    render() {
      const { ...props } = this.props;
      return <Component {...(props as P)} />;
    }
  };
