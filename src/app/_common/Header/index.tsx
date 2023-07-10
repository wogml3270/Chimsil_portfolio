'use client'

import { useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";

import Logo from "./logo";
import styles from "./Header.module.scss";
import Login from "@/components/Sign/Login";

const Navigation = dynamic(() => import("@/app/_common/Header/Nav/Navigation"), { ssr: false });
const NavMobile = dynamic(() => import("@/app/_common/Header/Nav/NavMobile"), { ssr: false });

interface MenuItem {
  href: string;
  title: string;
}

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const HEADER_ROUTES: MenuItem[] = [
    {
      href: "/",
      title: "HOME",
    },
    {
      href: "/project",
      title: "PROJECT",
    },
    {
      href: "/about",
      title: "ABOUT",
    },
    {
      href: "/connect",
      title: "CONNECT",
    },
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    script.onload = () => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
      console.log(window.Kakao.isInitialized());
    };
    document.body.appendChild(script);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Logo />
          <span>CHIMSIL</span>
        </Link>
        <Login />
        {isMobile ? (
          <NavMobile menu={HEADER_ROUTES} />
        ) : (
          <Navigation menu={HEADER_ROUTES} />
        )}
      </div>
    </header>
  );
};

export default Header;