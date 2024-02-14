import { useRef } from 'react';
import { Grid } from 'antd';

const Responsive = () => {
  /** Data */
  const screens = Grid.useBreakpoint();
  const isDesktop = useRef(true);
  isDesktop.current = !!Object.entries(screens).length
    ? Object.entries(screens)
        .filter((screen) => screen[1])
        .map((screen) => screen[0])
        .some((screen) => ['md', 'lg', 'xl', 'xxl'].includes(screen))
    : isDesktop.current;

  /** ReactDOM */
  return isDesktop;
};

export default Responsive;
