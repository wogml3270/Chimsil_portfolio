import Lottie from "lottie-react";

import LogoImage from "@public/LogoImage.json";

import styles from './Header.module.scss'

const Logo = () => {
  return (
    <div>
      <Lottie
        className={styles.logo}
        animationData={LogoImage}
        loop
      />
    </div>
  );
};

export default Logo;