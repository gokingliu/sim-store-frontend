import React, { FC, useState } from 'react';
import { Button, Checkbox, Form, FormInstance, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Api from '@/apis';
import ConfigForm from '@/components/common/config-form';
import LoginStrengthMeter from '@/components/business/login/strength-meter';
import { RequestRegister, PropsLoginRegisterForm } from '@/types';
import { checkPassword, checkUserName } from '@/utils';

const LoginRegisterForm: FC<PropsLoginRegisterForm> = ({ getValue }) => {
  /** DisplayName */
  LoginRegisterForm.displayName = 'LoginRegisterForm';

  /** Data */
  const [registerLoading, setRegisterLoading] = useState(false); // 注册按钮 loading
  const [form] = Form.useForm<{ userName: string; password: string; password2: string }>(); // 表单 Ref
  const passwordValue = Form.useWatch('password', form) ?? '';
  const navigate = useNavigate(); // 路由跳转
  const { t } = useTranslation();

  /** Method */
  // 表单完成
  const onFinish = async (values: RequestRegister) => {
    try {
      setRegisterLoading(true);
      const {
        data: { result },
      } = await Api.Register({ userName: values.userName, password: values.password });
      if (!result) return Promise.reject(result);
      setRegisterLoading(false);
      navigate('/');
    } catch (e) {
      setRegisterLoading(false);
      console.error(e);
    }
  };
  // 用户名变化时进行校验
  const validUserName = async (_: unknown, value: string) => {
    if (value) {
      if (!checkUserName(value)) return Promise.reject(new Error(t('请输入中文、英文、数字')));
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
      if (value.length < 6) return Promise.reject(new Error(t('最短需要 6 位')));
      if (!checkPassword(value))
        return Promise.reject(new Error(`${t('请输入英文、数字、常用符号')}~!@#$%^&*()_+={}|<>,.?;:`));
      return Promise.resolve();
    }
    return Promise.resolve();
  };
  // 再次确认密码
  const validPassword2 = ({ getFieldValue }: FormInstance) => ({
    validator(_: unknown, value: string) {
      if (!value || getFieldValue('password') === value) return Promise.resolve();
      return Promise.reject(new Error(t('输入错误，密码不一致')));
    },
  });
  // 隐私政策
  const validAgreement = (_: unknown, value: boolean) =>
    value ? Promise.resolve() : Promise.reject(new Error(t('需要同意隐私政策')));

  /** ReactDOM */
  return (
    <>
      <Typography.Title level={2}>{t('注册')}</Typography.Title>

      <ConfigForm
        formConfig={{
          form,
          name: 'register-form',
          className: 'login-form',
          onFinish,
        }}
        formItemConfigs={[
          {
            name: 'userName',
            rules: [{ required: true, message: t('请输入用户名') }, { validator: validUserName }],
            children: <Input maxLength={32} placeholder={t('用户名')} />,
          },
          {
            name: 'password',
            rules: [{ required: true, message: t('请输入密码') }, { validator: validPassword }],
            children: <Input.Password maxLength={32} type="password" placeholder={t('密码')} />,
          },
          {
            className: 'strength-meter',
            children: <LoginStrengthMeter password={passwordValue} />,
          },
          {
            name: 'password2',
            dependencies: ['password'],
            hasFeedback: true,
            rules: [{ required: true, message: t('请再次输入密码') }, validPassword2],
            children: <Input.Password maxLength={32} type="password" placeholder={t('确认密码')} />,
          },
          {
            name: 'agreement',
            rules: [{ validator: validAgreement }],
            valuePropName: 'checked',
            children: (
              <Checkbox>
                {t('我同意 ')}
                <a href="">{t('隐私政策')}</a>
              </Checkbox>
            ),
          },
          {
            children: (
              <>
                <Button className="login-form__button" type="primary" htmlType="submit" loading={registerLoading}>
                  {t('注册')}
                </Button>
                <p className="login-form__text">{t('已有账号？返回首页登录吧～')}</p>
                <Button
                  className="login-form__button"
                  onClick={() => {
                    getValue(false);
                  }}
                >
                  {t('返回')}
                </Button>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default LoginRegisterForm;
