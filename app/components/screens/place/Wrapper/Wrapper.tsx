import React from 'react';
import { FC } from 'react';
import style from './Wrapper.module.scss';

const Wrapper: FC<{ imagePath: string; children: React.ReactNode }> = ({
  imagePath,
  children,
}) => {
  return (
    <div
      className={style.wrapper}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div>{children}</div>
    </div>
  );
};

export default Wrapper;
