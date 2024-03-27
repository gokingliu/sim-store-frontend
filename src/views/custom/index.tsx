import React, { useEffect, useRef, useState, ElementRef, FC } from 'react';
import { Button, Descriptions, Flex, type DescriptionsProps } from 'antd';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Api from '@/apis';
import CustomEdit from '@/components/business/custom/edit';
import { ResponseCustomInfo } from '@/types';
import './index.less';
import './dark.less';

/** Mock Data */
import { MockCustomInfoData } from './mock.config';

const Custom: FC = () => {
  /** DisplayName */
  Custom.displayName = 'Custom';

  /** Data */
  const editRef = useRef<ElementRef<typeof CustomEdit>>(null);
  const customInfoData = useRef<ResponseCustomInfo>();
  const [customInfo, setCustomInfo] = useState<DescriptionsProps['items']>();
  const { t } = useTranslation();

  /** Life Cycle Hook */
  useEffect(() => {
    Api.GetCustomInfo()
      .then((res) => {
        customInfoData.current = res.data.result;
        setCustomInfo([
          { label: t('微信号'), children: res.data.result.wechat },
          { label: t('滚屏文字'), children: res.data.result.info },
          {
            label: t('头图'),
            children: (
              <>
                {res.data.result.banner.split('\n').map((element, index) => (
                  <img key={index} width={400} style={{ marginRight: '16px' }} src={element} alt="banner" />
                ))}
              </>
            ),
          },
        ]);
      })
      .catch(() => {
        // TODO 联调后 value 改为 null
        customInfoData.current = MockCustomInfoData;
        setCustomInfo([
          { label: t('微信号'), children: MockCustomInfoData.wechat },
          { label: t('滚屏文字'), children: MockCustomInfoData.info },
          {
            label: t('头图'),
            children: (
              <>
                {MockCustomInfoData.banner.split('\n').map((element, index) => (
                  <img
                    key={index}
                    style={{ width: '100%', maxWidth: '430px', marginRight: '16px' }}
                    src={element}
                    alt="banner"
                  />
                ))}
              </>
            ),
          },
        ]);
      });
  }, [t]);

  /** Method */
  const openModal = () => {
    editRef.current?.openModal();
  };

  /** ReactDOM */
  return (
    <Flex className="custom" justify="flex-start" vertical>
      <Helmet>
        <title>{t('页面定制')} - SIM Store</title>
      </Helmet>

      <Descriptions className="descriptions" bordered column={1} layout="vertical" size="small" items={customInfo} />

      <Button className="button" type="primary" size="middle" onClick={openModal}>
        {t('修改')}
      </Button>

      <CustomEdit ref={editRef} info={customInfoData} />
    </Flex>
  );
};

export default Custom;
