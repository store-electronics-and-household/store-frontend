import React, { useState } from 'react';
import cn from 'classnames';

interface ICardLikeBtn {
  isLikedCard: boolean;
}

const CardLikeBtn: React.FC<ICardLikeBtn> = ({ isLikedCard }: ICardLikeBtn) => {
  const [isLiked, setIsLiked] = useState(isLikedCard);

  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  const cardLikeButtonClassName = cn('card-like__button', {
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
