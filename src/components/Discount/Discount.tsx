import React from 'react';
import type { MyTypeBanners, MediumCardProps } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import { getPromoResults } from '../../utils/api/search-api';

interface DiscountProps {
  discountBannerImages: MyTypeBanners[];
  passSearchResults: (array: MediumCardProps[]) => void;
  handleSearch: (request: string) => void;
}

const Discount: React.FC<DiscountProps> = ({ handleSearch, discountBannerImages, passSearchResults }) => {
  const navigate = useNavigate();
  const handleOnClick = (id: number, name: string): void => {
    // console.log('debug1');
    getPromoResults(id)
      .then((res) => {
        // console.log('debug2');
        // console.log(res.content);
        passSearchResults(res.content);
        navigate('/search-results');
        handleSearch(name);
      })
      .catch((error) => {
        console.log(`НЕ успех ${error}`);
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
              handleOnClick(banner.id, banner.name);
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default Discount;
