import React, { FC } from 'react';
import style from './Filters.module.scss';

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
const Filters: FC = () => {
  return (
    <div className={style.wrapper}>
      {sities.map((sity) => (
        <button key={sity.location}>{sity.location}</button>
      ))}
    </div>
  );
};

export default Filters;
