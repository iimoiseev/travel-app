import React from 'react';
import { useRouter } from 'next/router';
import style from './Footer.module.scss';

type TypeNavItems = {
  icon: string;
  link: string;
};
const Navitems: TypeNavItems[] = [
  {
    icon: 'home',
    link: '/',
  },
  {
    icon: 'explore',
    link: '/explore',
  },
  {
    icon: 'place',
    link: '/place/kyoto',
  },
  {
    icon: 'person_outline',
    link: '/profile',
  },
];
const Footer = () => {
  const { push, pathname } = useRouter();
  return (
    <footer className={style.footer}>
      <nav>
        {Navitems.map((item) => (
          <button
            className={pathname === item.link ? style.active : null}
            onClick={() => push(item.link)}
            key={item.icon}
          >
            <span className="material-icons-outlined">{item.icon}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
