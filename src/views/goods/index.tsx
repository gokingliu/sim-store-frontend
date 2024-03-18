import React, { useCallback, useEffect, useRef, useState, ElementRef, FC } from 'react';
import Api from '@/apis';
import GoodsSearch from '@/components/business/goods/search';
import GoodsList from '@/components/business/goods/list';
import GoodsModal from '@/components/business/goods/modal';
import { RequestGoodsList, ResponseGoodsList } from '@/types';

/** Mock Data */
import { MockGoodsListData } from './mock.config';

const Goods: FC = () => {
  /** DisplayName */
  Goods.displayName = 'Goods';

  /** Data */
  const defaultSearchParams = {
    operator: 0,
    location: '',
    discount: 0,
    fee: 0,
  };
  const modalRef = useRef<ElementRef<typeof GoodsModal>>(null);
  const [goodsItem, setGoodsItem] = useState<{ id: number; button: string; name: string }>({
    id: 0,
    button: '',
    name: '',
  });
  const [searchParams, setSearchParams] = useState<RequestGoodsList>({ ...defaultSearchParams });
  const [goodsList, setGoodsList] = useState<ResponseGoodsList[] | null>(null);

  /** Life Cycle Hook */
  useEffect(() => {
    search(searchParams);
  }, []);

  /** Method */
  const handleListItem = (id: number, button: string, name: string) => {
    setGoodsItem({ id, button, name });
    modalRef.current?.openModal();
  };
  const search = useCallback(
    (values: RequestGoodsList) => {
      setSearchParams(values);
      Api.PostGoodsList(searchParams)
        .then((res) => {
          setGoodsList(res.data.result);
        })
        .catch(() => {
          // TODO 联调后 value 改为 null
          setGoodsList(MockGoodsListData);
        });
    },
    [searchParams],
  );

  /** ReactDOM */
  return (
    <>
      <GoodsSearch add={handleListItem} search={search} />

      <GoodsList goodsList={goodsList} handleListItem={handleListItem} />

      <GoodsModal ref={modalRef} goodsItem={goodsItem} />
    </>
  );
};
export default Goods;
