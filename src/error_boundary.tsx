import React, { ReactNode } from 'react';
import { FallbackUI } from './fallbackUI/fallbackUI';

interface Props {
  children?: ReactNode;
  fallback?: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <FallbackUI />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
