import Link from "next/link";
import Image from "next/image";

import styles from './Footer.module.scss'

interface FooterItem {
  href: string;
  src: string;
  alt: string;
}

const Footer = () => {
  const FOOTER_ROUTES: FooterItem[] = [
    {
      href: "https://wogml3270.notion.site",
      src: "/assets/notion",
      alt: "notion_url",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100006602792228",
      src: "/assets/facebook",
      alt: "facebook_url",
    },
    {
      href: "https://www.instagram.com/develop_pjh/",
      src: "/assets/instagram",
      alt: "instagram_url",
    },
    {
      href: "https://github.com/wogml3270",
      src: "/assets/github",
      alt: "github_url",
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.title}>Chimsil PortFolio</span>
        <p className={styles.copylight}>
          © 2023 From Chimsil_dev —
          <a
            href="mailto:wogml3270@naver.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            wogml3270@naver.com
          </a>
        </p>
        <span className={styles.link}>
          {FOOTER_ROUTES?.map((item) => {
            return (
              <Link key={item.href} href={item?.href} target="_blank">
                <Image
                  width={25}
                  height={25}
                  src={`${item?.src}.png`}
                  alt={item?.alt}
                />
              </Link>
            );
          })}
        </span>
      </div>
    </footer>
  );
}

export default Footer