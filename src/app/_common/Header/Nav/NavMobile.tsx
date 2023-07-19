import React from "react";
import Link from "next/link";

import styles from "./NavMobile.module.scss";

interface MenuItem {
  href: string;
  title: string;
}

interface NavMobileProps {
  menu: MenuItem[];
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile = ({ menu, isNavOpen, setIsNavOpen }: NavMobileProps) => {
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
                <Link href={item?.href} onClick={() => setIsNavOpen(false)} className={styles.route}>
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default NavMobile;
