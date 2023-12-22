import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useFavouritesContext } from '../../context/FavouritesContext';
import type { MediumCardProps, ProductFullDataType } from '../../utils/types';

interface ICardLikeBtn {
  product: MediumCardProps | ProductFullDataType;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const CardLikeBtn: React.FC<ICardLikeBtn> = ({ product }) => {
  const { updateProductLikeStatus, isCardLiked } = useFavouritesContext();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const productId: number = product.id;

  useEffect(() => {
    setIsLiked(isCardLiked(productId));
  }, []);

  const handleLike = (): void => {
    updateProductLikeStatus(product);
    setIsLiked(!isLiked);
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
