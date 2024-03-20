import React, { useEffect, FC } from 'react';
import { Button, Flex, Popover } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { PropsLanguage } from '@/types';
import './index.less';

const Language: FC<PropsLanguage> = () => {
  /** DisplayName */
  Language.displayName = 'Language';

  /** Data */
  const { i18n } = useTranslation();

  /** Life Cycle Hook */
  useEffect(() => {
    const language = localStorage.getItem('language');
    language && onChangeLanguage(language);
  }, []);

  /** Method */
  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  /** ReactDOM */
  return (
    <Popover
      overlayClassName="top-bar__tooltip"
      placement="bottom"
      content={
        <Flex vertical>
          <Button className="button" type="link" size="small" onClick={() => onChangeLanguage('zh')}>
            简体中文
          </Button>{' '}
          <Button className="button" type="link" size="small" onClick={() => onChangeLanguage('en')}>
            English
          </Button>
        </Flex>
      }
    >
      <Button type="text" icon={<TranslationOutlined />} />
    </Popover>
  );
};

export default Language;
