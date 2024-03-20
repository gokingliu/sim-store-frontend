import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfigProvider } from 'antd';
import zh from 'antd/es/locale/zh_CN';
import en from 'antd/es/locale/en_US';
import Router from '@/router';
import ErrorBoundary from '@/components/common/error-boundary';

const App: FunctionComponent = () => {
  const { i18n } = useTranslation();

  return (
    <ErrorBoundary>
      <ConfigProvider
        locale={{ zh, en }[i18n.language]}
        componentSize="large"
        theme={{
          token: {
            borderRadius: 2,
            colorPrimary: '#0960bd',
          },
        }}
      >
        <Router />
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default App;
