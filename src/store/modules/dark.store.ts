import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const DarkSlice = createSlice({
  // 命名空间
  name: 'dark',
  // state 数据初始值
  initialState: {
    darkMode: { true: true, false: false }[localStorage.getItem('dark') || 'false'] as boolean,
  },
  // actions，在组件中可以直接通过 dispatch 进行触发
  reducers: {
    actionDarkState(state, action: PayloadAction<boolean>) {
      state.darkMode = action.payload;
    },
  },
});

const setDarkModeClass = (dark: boolean) => () => {
  const darkModeDom = document.getElementsByTagName('body')[0];
  const darkModeClass = 'dark_mode--activated';

  dark
    ? !darkModeDom.classList.contains(darkModeClass) && darkModeDom.classList.add(darkModeClass)
    : darkModeDom.classList.contains(darkModeClass) && darkModeDom.classList.remove(darkModeClass);
};

export { setDarkModeClass };

export const { actionDarkState } = DarkSlice.actions;

export default DarkSlice.reducer;
