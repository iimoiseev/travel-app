import Link from 'next/link';
import React, { FC, useState } from 'react';
import { BsBookmarkHeart } from 'react-icons/bs';
import { IFav } from '../../../../types/place';

import style from './Header.module.scss';

const data: IFav[] = [
  {
    name: 'Japan, Japan',
    slug: 'Kyoto',
  },
  {
    name: 'Italy, Italy',
    slug: 'Venezia',
  },
  {
    name: 'Japan, Japan',
    slug: 'Kyoto',
  },
  {
    name: 'Italy, Italy',
    slug: 'Venezia',
  },
];

const Favorites: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={style.bookmark}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <span className={style.buttonWrapper}>
          <BsBookmarkHeart size={20} color="#e8e8e8" />
        </span>
      </button>
      {isOpen && (
        <ul>
          {data.map((fav) => (
            <li key={fav.slug}>
              <Link href={`/place/${fav.slug}`}>
                <a>{fav.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Favorites;
