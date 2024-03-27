import { useEffect, useState } from 'react';
import { Grid } from 'antd';

export const useResponsive = () => {
  /** Data */
  const screens = Grid.useBreakpoint();
  const [desktop, setDesktop] = useState(true);
  useEffect(() => {
    setDesktop(
      Object.entries(screens)
        .filter((screen) => screen[1])
        .map((screen) => screen[0])
        .some((screen) => ['lg', 'xl', 'xxl'].includes(screen)),
    );
  }, [screens]);

  /** ReactDOM */
  return desktop;
};
