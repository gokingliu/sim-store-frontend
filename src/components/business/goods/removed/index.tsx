import React, { forwardRef, useImperativeHandle, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PropsGoodsRemoved } from '@/types';
import Api from '@/apis';

const GoodsRemoved: FC<PropsGoodsRemoved> = forwardRef(
  ({ data: { id, name }, loadingFC, closeModal }: PropsGoodsRemoved, ref) => {
    /** DisplayName */
    GoodsRemoved.displayName = 'GoodsRemoved';

    /** Throw Method */
    useImperativeHandle(ref, () => ({
      post,
    }));

    /** Data */
    const { t } = useTranslation();

    /** Method */
    const post = () => {
      Api.DeleteGoodsListItem(id)
        .then((res) => {
          if (res.data.code) closeModal();
        })
        .catch(() => {
          // TODO
        })
        .finally(() => {
          loadingFC(false);
        });
    };

    /** ReactDOM */
    return (
      <p>
        {t('确认下架')} <span style={{ color: 'red' }}>{name}</span> ？
      </p>
    );
  },
);

export default GoodsRemoved;
