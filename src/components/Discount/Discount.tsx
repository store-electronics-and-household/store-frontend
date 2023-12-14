import React from 'react';
import styles from './discount.module.css';
import { Link } from 'react-router-dom';
import DISCOUNTBANNER_1 from '../../utils/mocks/pic/discountBanner1.png';
import DISCOUNTBANNER_2 from '../../utils/mocks/pic/discountBanner2.png';
import DISCOUNTBANNER_3 from '../../utils/mocks/pic/discountBanner3.png';
import DISCOUNTBANNER_4 from '../../utils/mocks/pic/discountBanner4.png';

const Discount: React.FC = () => {
  return (
    <section className='discount'>
      <Link className={styles.discount__container} rel='noreferrer' to='#'>
        <img src={DISCOUNTBANNER_1} alt='баннер' className='discount__offer' />
      </Link>
      <Link className={styles.discount__container} rel='noreferrer' to='#'>
        <img src={DISCOUNTBANNER_2} alt='баннер' className='discount__offer' />
      </Link>
      <Link className={styles.discount__container} rel='noreferrer' to='#'>
        <img src={DISCOUNTBANNER_3} alt='баннер' className={styles.discount__offer} />
      </Link>
      <Link className={styles.discount__container} rel='noreferrer' to='#'>
        <img src={DISCOUNTBANNER_4} alt='баннер' className={styles.discount__offer} />
      </Link>
    </section>
  );
};

export default Discount;
