import React, { forwardRef, FC, useImperativeHandle } from 'react';
import { PropsGoodsRemoved } from '@/types';

const GoodsRemoved: FC<PropsGoodsRemoved> = forwardRef(({ name, closeModal }: PropsGoodsRemoved, ref) => {
  /** DisplayName */
  GoodsRemoved.displayName = 'GoodsRemoved';

  /** Throw Method */
  useImperativeHandle(ref, () => ({
    post,
  }));

  /** Data */

  const post = () => {
    closeModal();
  };

  /** ReactDOM */
  return (
    <p>
      确认下架 <span style={{ color: 'red' }}>{name}</span> ？
    </p>
  );
});

export default GoodsRemoved;
