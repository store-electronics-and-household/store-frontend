import React, { useEffect, useState } from 'react';
import ProfileLayout from '../ProfileLayout/ProfileLayout';
import type { IContext } from '../../context/UserContext';
import { getOrders } from '../../utils/api/user-api';
import Order from '../Order/Order';

const Orders = ({
  setGeneralContext,
}: {
  setGeneralContext: (args: IContext) => void;
}): JSX.Element => {
  const token = localStorage.getItem('token') ?? '';
  const [maxRender, setMaxRender] = useState<number>(3);
  const [orders, setOrders] = useState<any[]>([]);
  useEffect(() => {
    getOrders(token)
      .then((res) => {
        setOrders(res.reverse());
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const renderMore = (): void => {
    setMaxRender((value) => value + 3);
  };

  return (
    <ProfileLayout setGeneralContext={setGeneralContext}>
      <div className='profile__orders'>
        {orders?.map((order, i) => {
          if (i >= maxRender) {
            // eslint-disable-next-line array-callback-return
            return;
          }
          return <Order key={order.id} data={order} />;
        })}
      </div>
      {orders?.length > 3 && orders.length > maxRender && (
        <button className='profile__button' onClick={renderMore}>
          показать ещё
        </button>
      )}
    </ProfileLayout>
  );
};

export default Orders;
