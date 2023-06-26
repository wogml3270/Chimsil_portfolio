'use client'

import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavMobile.module.scss";

interface MenuItem {
  href?: any;
  title?: string;
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
    <div className={styles.navToggle} onClick={onClickToggleMenu}>
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      {isNavOpen && (
        <nav className={styles.menu}>
          <ul>
            {menu.map((item, idx) => (
              <li key={idx}>
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
