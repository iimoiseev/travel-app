import React, { FC } from 'react';

import style from './HeadingSearchSection.module.scss';
import mapImage from '@/assets/image/SAP_9265.jpg';

const HeadingSearchSection: FC = () => {
  return (
    <section
      className={style.section}
      style={{ backgroundImage: `url('${mapImage.src}')` }}
    >
      <div>
        <h1>Beast places for trip</h1>
      </div>
    </section>
  );
};

export default HeadingSearchSection;
