'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

import Logo from './logo';
import styles from './Header.module.scss';

const Navigation = dynamic(() => import('@/app/_common/Header/Nav/Navigation'), { ssr: false });
const NavMobile = dynamic(() => import('@/app/_common/Header/Nav/NavMobile'), { ssr: false });

interface MenuItem {
  href: string;
  title: string;
}

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isNavOpen, setIsNavOpen] = useState(false);

  const HEADER_ROUTES: MenuItem[] = [
    {
      href: '/',
      title: 'HOME',
    },
    {
      href: '/project',
      title: 'PROJECT',
    },
    {
      href: '/about',
      title: 'ABOUT',
    },
    {
      href: '/connect',
      title: 'CONNECT',
    },
  ];

  const onClickClose = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/' onClick={onClickClose}>
          <Logo />
          <span>CHIMSIL</span>
        </Link>
        <Link className={styles.loginRoute} href='/login' onClick={onClickClose}>
          Login
        </Link>
        {isMobile ? (
          <NavMobile menu={HEADER_ROUTES} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        ) : (
          <Navigation menu={HEADER_ROUTES} />
        )}
      </div>
    </header>
  );
};

export default Header;
