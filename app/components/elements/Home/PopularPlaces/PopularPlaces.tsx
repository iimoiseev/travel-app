import React, { FC } from 'react';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { IPlace } from '../../../../types/place';

import style from './PopularPlaces.module.scss';

interface IPopularPlaces {
  places: IPlace[];
  isLoading: boolean;
}
const PopularPlaces: FC<IPopularPlaces> = ({ places, isLoading }) => {
  return (
    <div className={style.wrapper}>
      <h2>Popular Places</h2>
      {isLoading ? (
        <div
          style={{
            marginTop: '-2rem',
          }}
        >
          <Skeleton
            count={2}
            height={200}
            borderRadius="20px"
            baseColor="#1b1b1d"
            highlightcolor="#2c2c2e"
          ></Skeleton>
        </div>
      ) : places.length ? (
        places.map((place: IPlace) => (
          <Link href={`place/${place.slug}`}>
            <a
              className={style.item}
              style={{ backgroundImage: `url(${place.imagePath})` }}
              key={place.slug}
            >
              <div className={style.heading}>
                {`${place.location.sity},${place.location.country}`}
              </div>
            </a>
          </Link>
        ))
      ) : (
        <div className={style.item}>
          {' '}
          <div className={style.heading} style={{ textAlignLast: 'center' }}>
            {' '}
            Sorry... Not found!
          </div>{' '}
        </div>
      )}
    </div>
  );
};

export default PopularPlaces;
