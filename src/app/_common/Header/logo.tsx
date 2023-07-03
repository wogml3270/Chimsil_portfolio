import Lottie from "react-lottie-player";

import LogoImage from "@public/LogoImage.json";

import styles from './Header.module.scss'

const Logo = () => {
  return (
    <div>
      <Lottie
        className={styles.logo}
        animationData={LogoImage}
        loop
        play
      />
    </div>
  );
};

export default Logo;