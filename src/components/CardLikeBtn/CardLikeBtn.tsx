import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import { useFavouritesContext } from '../../context/FavouritesContext';
import { UserContext } from '../../context/UserContext';
import type { MediumCardProps, ProductFullDataType } from '../../utils/types';
import { useWarningPopupContext } from '../../context/WarningPopupContext';

interface ICardLikeBtn {
  product: MediumCardProps | ProductFullDataType;
}

const CardLikeBtn: React.FC<ICardLikeBtn> = ({ product }) => {
  const { updateProductLikeStatus, isCardLiked } = useFavouritesContext();
  const { isLoggedIn } = useContext(UserContext);
  const { handleOpenWarningPopup } = useWarningPopupContext();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const productId: number = product.id;

  useEffect(() => {
    setIsLiked(isCardLiked(productId));
  }, []);

  const handleLike = (): void => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      updateProductLikeStatus(product);
      setIsLiked(!isLiked);
    } else {
      handleOpenWarningPopup('Для добавления товара в избранные необходимо авторизоваться');
    };
  };

  const cardLikeButtonClassName = cn(
    'card-like__button', {
      'card-like__button_liked': isLiked,
    });

  return (
    <div className='card-like'>
      <button
        type='button'
        aria-label='Поставить лайк'
        className={cardLikeButtonClassName}
        onClick={handleLike}
      />
    </div>
  );
};

export default CardLikeBtn;
