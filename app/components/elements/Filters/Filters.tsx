import React, { FC, useState } from 'react';
import style from './Filters.module.scss';
import cn from 'classnames';
import { TypeSetState } from '@/types/common';
import { IPlace } from '@/types/place';
const countries = [
  {
    location: 'France',
  },
  {
    location: 'Japan',
  },
  {
    location: 'Italy',
  },
  {
    location: 'Brazil',
  },
  {
    location: 'USA',
  },
  {
    location: 'Russia',
  },
];
interface IFilters {
  setPlaces: TypeSetState<IPlace[]>;
  initialPlaces: IPlace[];
}
const Filters: FC<IFilters> = ({ setPlaces, initialPlaces }) => {
  const [filter, setFilter] = useState('');

  const handlerFilter = (location: string) => {
    if (filter === location) {
      setPlaces(initialPlaces);
      setFilter('');
    } else {
      setPlaces(
        initialPlaces.filter(
          (place) =>
            place.location.country.toLowerCase() === location.toLowerCase()
        )
      );
      setFilter(location);
    }
  };
  return (
    <div className={style.wrapper}>
      {countries.map((country) => (
        <button
          onClick={() => handlerFilter(country.location)}
          className={cn({
            [style.active]: country.location === filter,
          })}
          key={country.location}
        >
          {country.location}
        </button>
      ))}
    </div>
  );
};

export default Filters;
