import Lottie from "lottie-react";

import lottieJson from "@public/animation.json";

const Animation = () => {
  return <Lottie loop animationData={lottieJson} />
}

export default Animation;