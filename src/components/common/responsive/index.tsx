import React, { FC } from 'react';
import { Col, Grid, Row } from 'antd';
import { PropsResponsive } from '@/types';

const Responsive: FC<PropsResponsive> = ({ children, extra }) => {
  /** DisplayName */
  Responsive.displayName = 'Responsive';

  /** Data */
  const screens = Grid.useBreakpoint();
  let isPC = true;
  isPC = !!Object.entries(screens).length
    ? Object.entries(screens)
        .filter((screen) => screen[1])
        .map((screen) => screen[0])
        .some((screen) => ['md', 'lg', 'xl', 'xxl'].includes(screen))
    : isPC;

  /** ReactDOM */
  return isPC ? (
    <Row className="home home-pc">
      <Col className="home-content" span={18}>
        {children}
      </Col>

      <Col className="home-extra" span={6}>
        {extra}
      </Col>
    </Row>
  ) : (
    <Row className="home home-mobile" wrap>
      <Col className="home-content" span={24}>
        {children}

        {extra}
      </Col>
    </Row>
  );
};

export default Responsive;
