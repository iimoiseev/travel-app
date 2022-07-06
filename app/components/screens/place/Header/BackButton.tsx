import React, { FC } from 'react';
import style from './Header.module.scss';
import { BsChevronLeft } from 'react-icons/bs';
import Link from 'next/link';

const BackButton: FC = () => {
  return (
    <Link href="/">
      <a>
        <span className={style.buttonWrapper}>
          <BsChevronLeft size={20} color="#e8e8e8" />
        </span>
      </a>
    </Link>
  );
};

export default BackButton;
