import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import { type AccordionProps } from '../../utils/types';

const Accordion: React.FC<AccordionProps> = ({
  faqList,
  headText,
}: AccordionProps) => {
  const [currentFaqId, setCurrentFaqId] = useState(-1);
  const btnOnClick = (faqId: number): void => {
    setCurrentFaqId((currentValue) => (currentValue !== faqId ? faqId : -1));
  };

  return (
    <div className='accordion__container'>
      <h2 className='accordion__container-head'>{headText}</h2>
      <ul className='accordion__list'>
        {faqList.map((faqItem, faqId) => {
          return (
            <AccordionItem
              faqItem={faqItem}
              key={faqId}
              isQuestionOpen={faqId === currentFaqId}
              btnOnClick={() => {
                btnOnClick(faqId);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
