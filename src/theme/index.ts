import type { ThemeConfig } from 'antd';

export const ThemeDefault: ThemeConfig = {
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

export const ThemeDark: ThemeConfig = {
  token: {
    ...ThemeDefault.token,
    colorBgElevated: 'hsla(225deg, 15%, 15%, 1)',
    colorBgContainer: 'hsla(225deg, 15%, 10%, 1)',
    colorBorder: 'hsla(225deg, 15%, 10%, 1)',
    colorSplit: 'hsla(225deg, 15%, 10%, 1)',
    colorText: '#fff',
    colorTextBase: '#fff',
    controlOutline: 'rgba(0, 82, 217, 0.6)',
  },
  components: {
    ...ThemeDefault.components,
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
