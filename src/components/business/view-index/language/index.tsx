import React, { FC } from 'react';
import { Button, Flex, Popover } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { PropsLanguage } from '@/types';

const Language: FC<PropsLanguage> = () => {
  /** DisplayName */
  Language.displayName = 'Language';

  /** Data */
  const { i18n } = useTranslation();

  /** ReactDOM */
  return (
    <Popover
      overlayClassName="language__popover"
      placement="bottom"
      content={
        <Flex vertical>
          <Button className="button" type="link" size="middle" onClick={() => i18n.changeLanguage('zh')}>
            简体中文
          </Button>
          <Button className="button" type="link" size="middle" onClick={() => i18n.changeLanguage('en')}>
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
