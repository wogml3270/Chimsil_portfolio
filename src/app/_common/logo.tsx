import { useState, useEffect, memo } from "react";
import Lottie from "react-lottie-player";
import { useMediaQuery } from "react-responsive";
import LogoImage from "@public/LogoImage.json";

const Logo = ({ width = 150, height = 150 }) => {
  const [styledState, setStyledState] = useState({
    width,
    height,
  });

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    isMobile
      ? setStyledState({
        width: 50,
        height: 50,
      })
      : setStyledState({
        width: 150,
        height: 150,
      });
  }, [isMobile]);

  return (
    <div>
      <Lottie loop animationData={LogoImage} play style={styledState} />
    </div>
  );
};

const MemoizedLogo = memo(Logo);

export default MemoizedLogo;
