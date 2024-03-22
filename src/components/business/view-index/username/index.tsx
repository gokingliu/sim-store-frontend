import React, { FC } from 'react';
import { Avatar, Button, Popover } from 'antd';
import { useStoreDispatch, useStoreSelector, StoreState } from '@/store';
import { actionLogout } from '@/store/modules/user.store';
import { useTranslation } from 'react-i18next';
import { PropsUserName } from '@/types';

const UserName: FC<PropsUserName> = () => {
  /** DisplayName */
  UserName.displayName = 'UserName';

  /** Data */
  const colorList = [
    '#0052d9',
    '#7265e6',
    '#ffbf00',
    '#00a2ae',
    '#1bb1d8',
    '#4e8414',
    '#3e9d88',
    '#44375f',
    '#d70e1e',
    '#925bc7',
  ]; // 颜色值数组
  const { userName, token } = useStoreSelector((state: StoreState) => state.user); // 从 store 中获取 userName token
  const dispatch = useStoreDispatch(); // 调用 store 方法
  const { t } = useTranslation();

  /** Method */
  // 获取显示用户名
  const handleUserName = () => (token ? userName.substring(0, 1) : 'undefined');
  // 获取头像背景颜色
  const avatarColor = (userName: string): string => {
    try {
      const index = parseInt(userName.charCodeAt(0).toString().split('').reverse().join().substring(0, 1), 10);
      return colorList[index || 0];
    } catch (e) {
      return colorList[0];
    }
  };

  /** ReactDOM */
  return (
    <Popover
      overlayClassName="username__popover"
      placement="bottom"
      content={
        <Button className="button" type="link" size="middle" onClick={() => dispatch(actionLogout())}>
          {t('退出')}
        </Button>
      }
    >
      <Avatar
        className="username__avatar"
        style={{ backgroundColor: avatarColor(userName), marginLeft: 8 }}
        gap={4}
        size={28}
      >
        {handleUserName()}
      </Avatar>
    </Popover>
  );
};

export default UserName;
