import React, { FunctionComponent, useState } from 'react';
import { Button, Checkbox, Flex, Form, Input, message, Typography, FormInstance } from 'antd';
import { useNavigate } from 'react-router-dom';
import { checkPassword, checkUserName } from '@/utils';
import Logo from '../../assets/img/logo.png';
import LoginBoxBG from '../../assets/svg/login-box-bg.svg';
import Api from '@/apis';
import { RequestRegister } from '@/types';
import ConfigForm from '@/components/common/config-form';
import StrengthMeter from '@/components/business/strength-meter';
import './index.less';

const Login: FunctionComponent = () => {
  /** DisplayName */
  Login.displayName = 'Login';

  /** Data */
  const [registerLoading, setRegisterLoading] = useState(false); // 注册按钮 loading
  const [form] = Form.useForm<{ userName: string; password: string; password2: string }>(); // 表单 Ref
  const passwordValue = Form.useWatch('password', form) ?? '';
  const navigate = useNavigate(); // 路由跳转

  /** Method */
  // 表单完成
  const onFinish = () => {
    try {
      setRegisterLoading(true);
      form
        .validateFields()
        .then(async (values: RequestRegister) => {
          const {
            data: { result },
          } = await Api.Register({ userName: values.userName, password: values.password });
          if (!result) return Promise.reject(result);
          setRegisterLoading(false);
          navigate('/');
        })
        .catch((error) => {
          setRegisterLoading(false);
          message.error(error);
        });
    } catch (e) {
      console.error(e);
    }
  };
  // 用户名变化时进行校验
  const validUserName = async (_: unknown, value: string) => {
    if (value) {
      if (!checkUserName(value)) return Promise.reject(new Error('请输入中文、英文、数字'));
      const {
        data: { msg, result },
      } = await Api.CheckUserName({ userName: value });
      // TODO 后端修复校验正确时 result 的值
      if (!result) return Promise.resolve();
      return Promise.reject(new Error(msg));
    }
    return Promise.resolve();
  };
  // 密码变化时进行校验
  const validPassword = (_: unknown, value: string) => {
    if (value) {
      if (value.length < 6) return Promise.reject(new Error('最短需要 6 位'));
      if (!checkPassword(value)) return Promise.reject(new Error('请输入英文、数字、常用符号~!@#$%^&*()_+={}|<>,.?;:'));
      return Promise.resolve();
    }
    return Promise.resolve();
  };
  // 再次确认密码
  const validPassword2 = ({ getFieldValue }: FormInstance) => ({
    validator(_: unknown, value: string) {
      if (!value || getFieldValue('password') === value) return Promise.resolve();
      return Promise.reject(new Error('输入错误，密码不一致'));
    },
  });
  // 隐私政策
  const validAgreement = (_: unknown, value: boolean) =>
    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement'));

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

      <div className="register-box">
        <div className="register-container">
          <Typography.Title level={2}>注册</Typography.Title>

          <ConfigForm
            formConfig={{
              form,
              name: 'register-form',
              className: 'register-form',
              onFinish,
              onFinishFailed: () => message.error('请正确填写用户名和密码！'),
            }}
            formItemConfigs={[
              {
                name: 'userName',
                rules: [{ required: true, message: '请输入用户名' }, { validator: validUserName }],
                children: <Input maxLength={32} placeholder="账号" />,
              },
              {
                name: 'password',
                rules: [{ required: true, message: '请输入密码' }, { validator: validPassword }],
                children: <Input.Password maxLength={32} type="password" placeholder="密码" />,
              },
              {
                className: 'strength-meter',
                children: <StrengthMeter password={passwordValue} />,
              },
              {
                name: 'password2',
                dependencies: ['password'],
                hasFeedback: true,
                rules: [{ required: true, message: '请再次输入密码' }, validPassword2],
                children: <Input.Password maxLength={32} type="password" placeholder="确认密码" />,
              },
              {
                name: 'agreement',
                rules: [{ validator: validAgreement }],
                valuePropName: 'checked',
                children: (
                  <Checkbox>
                    我同意<a href="">隐私政策</a>
                  </Checkbox>
                ),
              },
              {
                children: (
                  <>
                    <Button
                      className="register-form__button"
                      type="primary"
                      htmlType="submit"
                      loading={registerLoading}
                    >
                      注 册
                    </Button>
                    <p className="register-form__text">已有账号？返回首页登录吧～</p>
                    <Button
                      className="register-form__button"
                      onClick={() => {
                        navigate('/');
                      }}
                    >
                      首 页
                    </Button>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
