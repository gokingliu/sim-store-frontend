import React, { FunctionComponent, useState } from 'react';
import { Flex, Typography } from 'antd';
import LoginLoginForm from '@/components/business/login/login-form';
import LoginRegisterForm from '@/components/business/login/register-form';
import Logo from '@/assets/img/logo.png';
import LoginBoxBG from '@/assets/svg/login-box-bg.svg';
import './index.less';

const Login: FunctionComponent = () => {
  /** DisplayName */
  Login.displayName = 'Login';

  /** Data */
  const [loginRegister, setLoginRegister] = useState(false);

  /** Method */
  const getLoginRegister = (val: boolean) => {
    setLoginRegister(val);
  };

  return (
    <div className="login">
      <div className="login-poster">
        <Flex className="logo-box" align="center">
          <img className="logo" alt="logo" src={Logo} />
          <Typography.Title className="logo-name" level={3}>
            SIM Store
          </Typography.Title>
        </Flex>

        <Flex className="image-box" vertical={true}>
          <img className="poster-image" alt="poster-image" src={LoginBoxBG} />
          <Typography.Title className="poster-info" level={2}>
            号卡销售管理平台
          </Typography.Title>
        </Flex>
      </div>

      <div className="login-box">
        <div className="login-container">
          {loginRegister ? (
            <LoginRegisterForm getValue={getLoginRegister} />
          ) : (
            <LoginLoginForm getValue={getLoginRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
