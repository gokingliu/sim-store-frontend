import React, { Component, ReactNode } from 'react';
import { Result } from 'antd';
import { PropsErrorBoundary, StateErrorBoundary } from 'src/types';

/** Class Component */
class ErrorBoundary extends Component<PropsErrorBoundary, StateErrorBoundary> {
  state: StateErrorBoundary = {
    hasError: false,
  };

  errorResult = (
    <Result
      status="error"
      title={<p style={{ color: '#fff' }}>逻辑错误</p>}
      subTitle={<p style={{ color: '#fff' }}>请刷新页面再次尝试</p>}
    />
  );

  static getDerivedStateFromError(): StateErrorBoundary {
    return { hasError: true };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.errorResult;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
