import React from 'react';

interface DeliveryContentProps {
  title: string;
  icon: string;
  alt: string;
  description: string;
  highlight: string[];
}

const DeliveryContent: React.FC<DeliveryContentProps> = ({
  title,
  icon,
  alt,
  description,
  highlight
}) => {
  return (
      <>
      <img className='delivery__info-icon' src={icon} alt={alt} />
        <div className='delivery__info-wrapper'>
          <h3 className='delivery__info-title'>{title}</h3>
          <span className='delivery__info-description'>{description}</span>
          {highlight.map((span, key) => {
            return (
              <span key={key} className='delivery__info-highlight'>
                {span}
              </span>
            );
          })}
        </div>
        </>
  );
};

export default DeliveryContent;
