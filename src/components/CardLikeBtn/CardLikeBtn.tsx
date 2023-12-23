import React, { useContext, useState, useEffect } from 'react';
import cn from 'classnames';
import { useFavouritesContext } from '../../context/FavouritesContext';
import { UserContext } from '../../context/UserContext';
import { useWarningPopupContext } from '../../context/WarningPopupContext';

interface ICardLikeBtn {
  productId: number;
}

const CardLikeBtn: React.FC<ICardLikeBtn> = ({ productId }) => {
  const { updateProductLikeStatus, isCardLiked } = useFavouritesContext();
  const { isLoggedIn } = useContext(UserContext);
  const { handleOpenWarningPopup } = useWarningPopupContext();
  const [isLiked, setIsLiked] = useState<boolean>(isCardLiked(productId));

  useEffect(() => {
    setIsLiked(isCardLiked(productId));
  }, [productId]);

  const handleLike = (): void => {
    if (isLoggedIn) {
      updateProductLikeStatus(productId);
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
