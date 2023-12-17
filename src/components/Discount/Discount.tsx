import React from 'react';
// import { Link } from 'react-router-dom';
import { type MyTypeBanners } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import { getSearchResults } from '../../utils/api/user-api';

interface DiscountProps {
  discountBannerImages: MyTypeBanners[];
}

const Discount: React.FC<DiscountProps> = ({ discountBannerImages }) => {
  const navigate = useNavigate();
  const handleOnClick = (id: number): void => {
    getSearchResults(id)
      .then((res) => {
        navigate('/search-results');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className='discount'>
      {discountBannerImages.map((banner, index) => (
        <div
          key={banner.id}
          className={`discount__container discount__container_type_${index}`}
        >
          <img
            src={banner.imageLink}
            alt={banner.name}
            className={`discount__offer discount__offer_type_${index}`}
            onClick={() => {
              handleOnClick(banner.id);
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default Discount;
