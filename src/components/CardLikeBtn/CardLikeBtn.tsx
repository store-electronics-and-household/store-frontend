import React, { useState } from 'react';

interface ICardLikeBtn {
  isLikedCard: boolean;
}

const CardLikeBtn: React.FC<ICardLikeBtn> = ({ isLikedCard }: ICardLikeBtn) => {
  const [isLiked, setIsLiked] = useState(isLikedCard);

  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  const cardLikeButtonClassName = `card-like__button ${
      isLiked && 'card-like__button_liked'
    }`;

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
