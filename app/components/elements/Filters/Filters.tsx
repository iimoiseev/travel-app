import React, { FC, useState } from 'react';
import style from './Filters.module.scss';
import cn from 'classnames';
import { TypeSetState } from '../../../types/common';
import { IPlace } from '../../../types/place';
const sities = [
  {
    location: '1Paris',
  },
  {
    location: '2Paris',
  },
  {
    location: '3Paris',
  },
  {
    location: '4Paris',
  },
  {
    location: '5Paris',
  },
  {
    location: '6Paris',
  },
];
interface IFilters {
  setPlaces: TypeSetState<IPlace[]>;
}
const Filters: FC<IFilters> = ({ setPlaces }) => {
  const [filter, setFilter] = useState('');
  return (
    <div className={style.wrapper}>
      {sities.map((sity) => (
        <button
          onClick={() => setFilter(sity.location)}
          className={cn({
            [style.active]: sity.location === filter,
          })}
          key={sity.location}
        >
          {sity.location}
        </button>
      ))}
    </div>
  );
};

export default Filters;
