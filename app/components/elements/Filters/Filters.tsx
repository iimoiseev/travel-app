import React, { FC, useState } from 'react';
import style from './Filters.module.scss';
import cn from 'classnames';
import { TypeSetState } from '@/types/common';
import { IPlace } from '@/types/place';
import uniqBy from 'lodash/uniqBy';

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
      {uniqBy(initialPlaces, 'location.country').map((place) => {
        const location = place.location.country;
        return (
          <button
            onClick={() => handlerFilter(location)}
            className={cn({
              [style.active]: location === filter,
            })}
            key={location}
          >
            {location}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
