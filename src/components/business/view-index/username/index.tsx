import React, { FC } from 'react';
import { Avatar, Button, Flex, Popover } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useStoreDispatch, useStoreSelector, StoreState } from '@/store';
import { actionLogout } from '@/store/modules/user.store';
import { PropsUserName } from '@/types';
import './index.less';

const UserName: FC<PropsUserName> = () => {
  /** DisplayName */
  UserName.displayName = 'UserName';

  /** Data */
  const colorList = [
    '#f56a00',
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
  const navigate = useNavigate(); // 路由跳转

  /** Method */
  // 获取显示用户名
  const handleUserName = () => (token ? userName.substring(0, 1) : '登陆');
  // 获取头像背景颜色
  const avatarColor = (userName: string): string => {
    try {
      const index = parseInt(userName.charCodeAt(0).toString().split('').reverse().join().substring(0, 1), 10);
      return colorList[index || 0];
    } catch (e) {
      return colorList[0];
    }
  };
  // 登陆弹框
  const handleLogin = () => {
    navigate('/login');
  };

  /** ReactDOM */
  return (
    <Popover
      overlayClassName="top-bar__tooltip"
      placement="bottom"
      getPopupContainer={() => document.getElementById('TopBar') as HTMLElement}
      content={
        token ? (
          <Button className="button" type="link" onClick={() => dispatch(actionLogout())}>
            退 出
          </Button>
        ) : (
          <Flex vertical>
            <Button size="middle" type="link" onClick={handleLogin}>
              登 陆
            </Button>

            <Button size="middle" type="link" onClick={handleLogin}>
              注 册
            </Button>
          </Flex>
        )
      }
    >
      <Avatar className="top-bar__avatar" style={{ backgroundColor: avatarColor(userName) }} gap={6} size={32}>
        {handleUserName()}
      </Avatar>
    </Popover>
  );
};

export default UserName;
