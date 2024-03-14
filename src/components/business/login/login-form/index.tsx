import React, { FC, useState } from 'react';
import { Button, Checkbox, Form, Input, message, Typography } from 'antd';
import { useStoreDispatch } from '@/store';
import { actionLogin } from '@/store/modules/user.store';
import { FormLoginValues, PropsLoginLoginForm } from '@/types';
import ConfigForm from '@/components/common/config-form';

const LoginLoginForm: FC<PropsLoginLoginForm> = ({ getValue }) => {
  /** DisplayName */
  LoginLoginForm.displayName = 'LoginLoginForm';

  /** Data */
  const dispatch = useStoreDispatch(); // 调用 store 方法
  const [loginLoading, setLoginLoading] = useState(false); // 登录按钮 loading
  const [form] = Form.useForm(); // 表单 Ref

  /** Method */
  // 表单完成
  const onFinish = async (values: FormLoginValues) => {
    try {
      setLoginLoading(true);
      const res = await dispatch(actionLogin(values));
      if (res) return Promise.reject(res);
      setLoginLoading(false);
    } catch (e) {
      setLoginLoading(false);
      console.error(e);
    }
  };

  /** ReactDOM */
  return (
    <>
      <Typography.Title level={2}>登录</Typography.Title>

      <ConfigForm
        formConfig={{
          form,
          name: 'login-form',
          className: 'login-form',
          initialValues: { remember: true },
          onFinish,
          onFinishFailed: () => message.error('请正确填写用户名和密码！'),
        }}
        formItemConfigs={[
          {
            name: 'userName',
            rules: [{ required: true, message: '请输入用户名' }],
            children: <Input placeholder="用户名" />,
          },
          {
            name: 'password',
            rules: [{ required: true, message: '请输入密码' }],
            children: <Input.Password type="password" placeholder="密码" />,
          },
          {
            name: 'remember',
            valuePropName: 'checked',
            children: <Checkbox>自动登录</Checkbox>,
          },
          {
            children: (
              <>
                <Button className="login-form__button" type="primary" htmlType="submit" loading={loginLoading}>
                  登 录
                </Button>
                <p className="login-form__text">没有账号？试试注册吧～</p>
                <Button
                  className="login-form__button"
                  onClick={() => {
                    getValue(true);
                  }}
                >
                  注 册
                </Button>
              </>
            ),
          },
        ]}
      />
    </>
  );
};

export default LoginLoginForm;
