import React, { FunctionComponent, useState } from 'react';
import { Flex, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import LoginLoginForm from '@/components/business/login/login-form';
import LoginRegisterForm from '@/components/business/login/register-form';
import Dark from '@/components/business/view-index/dark';
import Language from '@/components/business/view-index/language';
import Logo from '@/assets/img/logo.png';
import LoginBoxBG from '@/assets/svg/login-box-bg.svg';
import './index.less';
import './dark.less';

const Login: FunctionComponent = () => {
  /** DisplayName */
  Login.displayName = 'Login';

  /** Data */
  const [loginRegister, setLoginRegister] = useState(false);
  const { t } = useTranslation();

  /** Method */
  const getLoginRegister = (val: boolean) => {
    setLoginRegister(val);
  };

  return (
    <div className="login">
      <Flex className="logo-box" align="center" justify="space-between">
        <Flex align="center">
          <img className="logo" alt="logo" src={Logo} />
          <Typography.Title className="logo-name" level={3}>
            SIM Store
          </Typography.Title>
        </Flex>

        <Flex align="center">
          <Dark />

          <Language />
        </Flex>
      </Flex>

      <Flex className="login-poster" vertical={true} justify="center">
        <img className="poster-image" alt="poster-image" src={LoginBoxBG} />
        <Typography.Title className="poster-info" level={2}>
          {t('号卡销售管理平台')}
        </Typography.Title>
      </Flex>

      <Flex className="login-box" vertical={true} justify="center">
        <div className="login-container">
          {loginRegister ? (
            <LoginRegisterForm getValue={getLoginRegister} />
          ) : (
            <LoginLoginForm getValue={getLoginRegister} />
          )}
        </div>
      </Flex>
    </div>
  );
};

export default Login;
