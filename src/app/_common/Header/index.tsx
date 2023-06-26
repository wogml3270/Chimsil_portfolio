'use client'

import Logo from "@/app/_common/logo";
import { useMediaQuery } from "react-responsive";
import styles from "./Header.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";

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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Logo />
          <span>CHIMSIL</span>
        </Link>
        {!isMobile ? (
          <Navigation menu={HEADER_ROUTES} />
        ) : (
          <NavMobile menu={HEADER_ROUTES} />
        )}
      </div>
    </header>
  );
};

export default Header;
