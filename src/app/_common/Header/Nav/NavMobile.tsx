'use client'

import React, { useState } from "react";
import Link from "next/link";

import styles from "./NavMobile.module.scss";

interface MenuItem {
  href: string;
  title: string;
}

interface NavMobileProps {
  menu: MenuItem[];
}

const NavMobile = ({ menu }: NavMobileProps) => {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);

  const onClickToggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.navToggle}>
      <input type="checkbox" onClick={onClickToggleMenu} />
      <span />
      <span />
      <span />
      {isNavOpen && (
        <nav className={styles.navbar}>
          <ul>
            {menu.map((item) => (
              <li key={item?.href}>
                <Link href={item?.href}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavMobile;
