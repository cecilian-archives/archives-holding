import { useEffect } from "react";
import useWindowWidth from "./useWindowWidth";
import confetti from "canvas-confetti";
import { theme } from "twin.macro";

const useConfetti = ({ autoFire = false } = {}) => {
  const windowWidth = useWindowWidth();
  const isMobile =
    windowWidth < parseInt(theme`screens.md.max`.replace("px", ""));
  const confettiConfig = {
    particleCount: 300,
    angle: 90,
    spread: isMobile ? 90 : 120,
    gravity: 1.4,
    colors: [theme`colors.deepBlue.110`, theme`colors.brightYellow`],
    scalar: 1,
    disableForReducedMotion: true,
    drift: 0,
    origin: { x: 0.5, y: 0.2 },
    ticks: 250,
  };
  const fireConfetti = () => {
    confetti(confettiConfig);
  };

  useEffect(() => {
    autoFire && fireConfetti();
  }, []);

  return fireConfetti;
};

export default useConfetti;
