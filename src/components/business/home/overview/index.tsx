import React, { ElementRef, FC, useRef } from 'react';
import { Button, Col, Flex, Row, Skeleton } from 'antd';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '@/components/common/responsive';
import CardBox from '@/components/common/cardbox';
import HomeMessage from '@/components/business/home/message';
import { PropsHomeOverView } from '@/types';
import './index.less';

const HomeOverView: FC<PropsHomeOverView> = ({ visit, goods, message }) => {
  /** DisplayName */
  HomeOverView.displayName = 'HomeOverView';

  /** Data */
  const messageRef = useRef<ElementRef<typeof HomeMessage>>(null);
  const { t } = useTranslation();
  const desktop = useResponsive();

  /** Method */
  const checkMessage = () => {
    messageRef.current?.checkMessage();
  };

  /** ReactDOM */
  return (
    <>
      <Row className="home-overview">
        <Col span={desktop ? 7 : 24}>
          <CardBox title={t('访问总量')}>
            <Skeleton loading={!visit} active paragraph={{ rows: 2 }}>
              <Flex className="card-box" vertical={true} align="center">
                <div className="main-number">{visit?.total}</div>
                <div>
                  {t('昨日访问量')}：{visit?.page_view.at(-2)}
                </div>
              </Flex>
            </Skeleton>
          </CardBox>
        </Col>

        <Col style={desktop ? { padding: '0 16px' } : { margin: '16px 0' }} span={desktop ? 10 : 24}>
          <CardBox title={t('最新消息')}>
            <Skeleton loading={!visit} active paragraph={{ rows: 2 }}>
              <Flex className="card-box" vertical={true} align="center">
                {message?.map((item) => (
                  <Button type="link" size="small" key={item.id} onClick={checkMessage}>
                    {item.title}
                  </Button>
                ))}
              </Flex>
            </Skeleton>
          </CardBox>
        </Col>

        <Col className="home-content" span={desktop ? 7 : 24}>
          <CardBox title={t('商品总量')}>
            <Skeleton loading={!visit} active paragraph={{ rows: 2 }}>
              <Flex className="card-box" vertical={true} align="center">
                <div className="main-number">{goods?.total}</div>
                <div>
                  {t('下架商品数')}：{goods?.off}
                </div>
              </Flex>
            </Skeleton>
          </CardBox>
        </Col>
      </Row>

      <HomeMessage ref={messageRef} id={1} />
    </>
  );
};

export default HomeOverView;
