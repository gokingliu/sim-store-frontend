import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfigProvider } from 'antd';
import zh from 'antd/es/locale/zh_CN';
import en from 'antd/es/locale/en_US';
import Router from '@/router';
import { useStoreSelector, StoreState } from '@/store';
import { ThemeDefault, ThemeDark } from '@/theme';
import ErrorBoundary from '@/components/common/error-boundary';

const App: FunctionComponent = () => {
  const { i18n } = useTranslation(); // 国际化
  const { darkMode } = useStoreSelector((state: StoreState) => state.dark); // 暗黑模式
  const { token } = useStoreSelector((state: StoreState) => state.user); // 鉴权 Token

  return (
    <ErrorBoundary>
      <ConfigProvider
        componentSize="middle"
        locale={{ zh, en }[i18n.language]}
        theme={darkMode ? ThemeDark : ThemeDefault}
      >
        <Router token={token} />
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default App;
