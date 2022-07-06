import React, { FC } from 'react';
import style from './Header.module.scss';

import Favorites from './Favorites';
import BackButton from './BackButton';

const Header: FC = () => {
  return (
    <div className={style.wrapper}>
      <BackButton />
      <Favorites />
    </div>
  );
};

export default Header;
