import React, { useEffect, useRef, useState } from 'react';
import arrow from '../../image/icons/arr-down.svg';
import { type AccordionItemProps } from '../../utils/types';
import cn from 'classnames';

const AccordionItem: React.FC<AccordionItemProps> = ({
  faqItem,
  isQuestionOpen,
  btnOnClick,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isQuestionOpen === true) {
      const contentEl = contentRef.current as HTMLParagraphElement;
      setHeight(contentEl?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isQuestionOpen]);

  // eslint-disable-next-line quote-props
  const classname = cn('accordion__arrow', { 'accordion__arrow_opened': isQuestionOpen });

  return (
    <li className='accordion__item'>
      <button className='accordion__btn' onClick={btnOnClick}>
        <p className='accordion__question'>{faqItem.q}</p>
        <img
          className={classname}
          src={arrow}
          alt='Стрелка'
        />
      </button>
      <div className='accordion__answer-wrap' style={{ height }}>
        <p ref={contentRef} className='accordion__answer'>
          {faqItem.a}
        </p>
      </div>
    </li>
  );
};

export default AccordionItem;
