import React, { FC } from 'react';
import Filters from '../../Filters/Filters';
import Search from '../../Search/Search';
import style from './SearchSection.module.scss';
import mapImage from '../../../../../assets/image/SAP_9265.jpg';

const SearchSection: FC = () => {
  return (
    <section
      className={style.section}
      style={{ backgroundImage: `url('${mapImage.src}')` }}
    >
      <div>
        <h1>Beast places for trip</h1>
        <Search />
        <Filters />
      </div>
    </section>
  );
};

export default SearchSection;
