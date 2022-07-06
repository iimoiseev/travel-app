import React from 'react';
import style from './BookTrip.module.scss';
import { AiFillCaretRight } from 'react-icons/ai';
const BookTrip = () => {
  const bookTrip = () => {
    console.log('ok');
  };
  return (
    <button className={style.button} onClick={bookTrip}>
      <span className={style.text}>BookTrip</span>
      <span className={style.icon}>
        <AiFillCaretRight size="18" />
      </span>
    </button>
  );
};

export default BookTrip;
