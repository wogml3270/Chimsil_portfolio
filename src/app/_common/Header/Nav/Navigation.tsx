import Link from "next/link";

import styles from "./Navigation.module.scss";

interface MenuItem {
  href: string;
  title: string;
}

interface NavigationProps {
  menu: MenuItem[];
}

const Navigation = ({ menu }: NavigationProps) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {menu.map((item) => (
          <li key={item.href}>
            <Link className={styles.route} href={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
