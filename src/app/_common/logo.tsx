import { useState, useEffect, memo } from "react";
import Lottie from "react-lottie-player";
import { useMediaQuery } from "react-responsive";

import LogoImage from "@public/LogoImage.json";

const Logo = ({ width = 150, height = 150 }) => {
  const [sizeState, setSizeState] = useState({
    width,
    height,
  });

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    isMobile
      ? setSizeState({
        width: 50,
        height: 50,
      })
      : setSizeState({
        width: 150,
        height: 150,
      });
  }, [isMobile]);

  return (
    <div>
      <Lottie loop animationData={LogoImage} play style={sizeState} />
    </div>
  );
};

const MemoizedLogo = memo(Logo);

export default MemoizedLogo;
