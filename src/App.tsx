import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfigProvider, type ThemeConfig } from 'antd';
import { useStoreSelector, StoreState } from '@/store';
import zh from 'antd/es/locale/zh_CN';
import en from 'antd/es/locale/en_US';
import Router from '@/router';
import ErrorBoundary from '@/components/common/error-boundary';

const App: FunctionComponent = () => {
  const { i18n } = useTranslation(); // 国际化
  const { darkMode } = useStoreSelector((state: StoreState) => state.dark); // 暗黑模式
  const themeDefault: ThemeConfig = {
    token: {
      borderRadius: 2,
      colorPrimary: '#0052d9',
      sizePopupArrow: 0,
    },
    components: {
      Button: {
        primaryShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px',
      },
      List: {
        itemPadding: '16px',
      },
    },
  };
  const themeDark: ThemeConfig = {
    token: {
      ...themeDefault.token,
      colorBgElevated: 'hsla(225deg, 15%, 15%, 1)',
      colorBgContainer: 'hsla(225deg, 15%, 10%, 1)',
      colorBorder: 'hsla(225deg, 15%, 10%, 1)',
      colorSplit: 'hsla(225deg, 15%, 10%, 1)',
      colorText: '#fff',
      colorTextBase: '#fff',
      controlOutline: 'rgba(0, 82, 217, 0.6)',
    },
    components: {
      ...themeDefault.components,
      Layout: {
        siderBg: 'hsla(225deg, 15%, 20%, 1)',
      },
      Menu: {
        darkItemBg: 'hsla(225deg, 15%, 20%, 1)',
        darkItemSelectedBg: 'hsla(225deg, 15%, 10%, 1)',
        darkSubMenuItemBg: 'hsla(225deg, 15%, 20%, 1)',
      },
      Select: {
        optionActiveBg: 'hsla(225deg, 15%, 20%, 1)',
        optionSelectedBg: 'hsla(225deg, 15%, 25%, 1)',
      },
    },
  };

  return (
    <ErrorBoundary>
      <ConfigProvider
        componentSize="middle"
        locale={{ zh, en }[i18n.language]}
        theme={darkMode ? themeDark : themeDefault}
      >
        <Router />
      </ConfigProvider>
    </ErrorBoundary>
  );
};

export default App;
