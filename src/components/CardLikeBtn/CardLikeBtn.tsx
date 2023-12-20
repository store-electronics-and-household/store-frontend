import React, { useState } from 'react';
import cn from 'classnames';
import { useFavouritesContext } from '../../context/FavouritesContext';
import type { MediumCardProps } from '../../utils/types';

interface ICardLikeBtn {
  product: MediumCardProps;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const CardLikeBtn: React.FC<ICardLikeBtn> = ({ product }) => {
  const { handleAddProductToFavourites, isCardLiked } = useFavouritesContext();
  const [isLiked, setIsLiked] = useState(isCardLiked(product.id));

  const handleLike = (): void => {
    handleAddProductToFavourites(product);
    setIsLiked(!isLiked);
  };

  const cardLikeButtonClassName = cn(
    'card-like__button',
    { 'card-like__button_liked': isLiked }
  );

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
