import React, { useRef, useEffect, FC } from 'react';
import { PropsFlipper } from 'src/types';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

const Flipper: FC<PropsFlipper> = ({ value }) => {
  /** DisplayName */
  Flipper.displayName = 'Flipper';

  const tickInstance = useRef();
  const tickRef = useRef(null);

  useEffect(() => {
    const didInit = (tick: Tick) => {
      tickInstance.current = tick;
    };

    const tickValue = tickInstance.current;
    Tick.DOM.create(tickRef.current, { value, didInit });

    return () => Tick.DOM.destroy(tickValue);
  });

  useEffect(() => {
    if (tickInstance.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tickInstance.current.value = value;
    }
  }, [value]);

  return (
    <div ref={tickRef} className="tick">
      <div data-repeat="true" aria-hidden="true">
        <span data-view="flip">Tick</span>
      </div>
    </div>
  );
};

export default Flipper;
