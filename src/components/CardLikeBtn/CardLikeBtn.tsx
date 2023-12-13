import React, { useState } from 'react';

interface ICardLikeBtn {
  isLikedCard: boolean;
}

const CardLikeBtn: React.FC<ICardLikeBtn> = ({ isLikedCard }: ICardLikeBtn) => {
  const [isLiked, setIsLiked] = useState(isLikedCard);

  const handleLike = (): void => {
    setIsLiked(!isLiked);
  };

  // const cardLikeButtonClassName = `card-like-btn__button ${
  //     isLiked && 'card-like-btn__button_active'
  //   }`;

  return (
    <div className='card-like-btn'>
      <button
        type='button'
        aria-label='Поставить лайк'
        className='card-like-btn__button'
        // className={cardLikeButtonClassName}
        onClick={handleLike}
      >
        {isLiked
          ? <svg className='card-like-btn__icon' xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path d="M22 4c-2.32 0-4.546 1.08-6 2.787C14.547 5.08 12.32 4 10 4c-4.106 0-7.333 3.227-7.333 7.333 0 5.04 4.533 9.147 11.4 15.387L16 28.467l1.934-1.76c6.866-6.227 11.4-10.334 11.4-15.374C29.334 7.227 26.107 4 22 4Zm-5.866 20.733-.134.134-.133-.134c-6.347-5.746-10.533-9.546-10.533-13.4 0-2.666 2-4.666 4.666-4.666 2.054 0 4.054 1.32 4.76 3.146h2.494c.693-1.826 2.693-3.146 4.746-3.146 2.667 0 4.667 2 4.667 4.666 0 3.854-4.187 7.654-10.533 13.4Z"/>
            <path d="m16.134 24.733-.134.134-.133-.134c-6.347-5.746-10.533-9.546-10.533-13.4 0-2.666 2-4.666 4.666-4.666 2.054 0 4.054 1.32 4.76 3.146h2.494c.693-1.826 2.693-3.146 4.746-3.146 2.667 0 4.667 2 4.667 4.666 0 3.854-4.187 7.654-10.533 13.4Z"/>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h32v32H0z"/>
              </clipPath>
            </defs>
          </svg>
          : <svg className='card-like-btn__icon' width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9998 4C19.6798 4 17.4532 5.08 15.9998 6.78667C14.5465 5.08 12.3198 4 9.99984 4C5.89317 4 2.6665 7.22667 2.6665 11.3333C2.6665 16.3733 7.19984 20.48 14.0665 26.72L15.9998 28.4667L17.9332 26.7067C24.7998 20.48 29.3332 16.3733 29.3332 11.3333C29.3332 7.22667 26.1065 4 21.9998 4ZM16.1332 24.7333L15.9998 24.8667L15.8665 24.7333C9.51984 18.9867 5.33317 15.1867 5.33317 11.3333C5.33317 8.66667 7.33317 6.66667 9.99984 6.66667C12.0532 6.66667 14.0532 7.98667 14.7598 9.81333H17.2532C17.9465 7.98667 19.9465 6.66667 21.9998 6.66667C24.6665 6.66667 26.6665 8.66667 26.6665 11.3333C26.6665 15.1867 22.4798 18.9867 16.1332 24.7333Z"/>
            <defs>
              <clipPath id="clip0_159_144">
              <rect width="32" height="32" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        }
      </button>
    </div>
  );
};

export default CardLikeBtn;
