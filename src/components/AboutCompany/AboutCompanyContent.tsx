import React from 'react';

interface AboutCompanyContentProps {
  head: string
  iconSrc: string
  altText: string
  text: string[]
}

const AboutCompanyContent: React.FC<AboutCompanyContentProps> = ({
  head,
  iconSrc,
  altText,
  text,
}) => {
  return (
    <div className='content'>
      <img
        className='content__icon'
        src={iconSrc}
        alt={altText}
      />
      <h2 className='content__head'>{head}</h2>
      <div className='content__description'>
        {text.map((p, pKey) => {
          return (
            <p key={pKey} className='content__text'>{p}</p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutCompanyContent;
