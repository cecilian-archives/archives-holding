import { useState } from "react";
import tw, { styled, css } from "twin.macro";
import { useInterval, useDelayedInterval } from "../hooks/useInterval";

const images = [
  "Pippin.jpg",
  "Popstars.jpg",
  "GuysandDolls2004.jpg",
  "Mikado.jpg",
  "ChildrenofEden.jpg",
  "Urinetown.jpg",
  "Orpheus.jpg",
  "GuysandDolls.jpg",
  "H2Dollar.jpg",
  "BatBoy.jpg",
  "WSS.jpg",
  "ASU.jpg",
  "Hugh.jpg",
];

const ImageFader = ({ switchTime = 5000 }) => {
  const [evenImageNum, setEvenImageNum] = useState(0);
  const [oddImageNum, setOddImageNum] = useState(1);
  const [showEvens, setShowEvens] = useState(true);
  useInterval(() => setShowEvens((current) => !current), {
    interval: switchTime,
  });
  useDelayedInterval(
    () => setEvenImageNum((current) => (current + 2) % images.length),
    { interval: 2 * switchTime, delay: 1.5 * switchTime }
  );
  useDelayedInterval(
    () => setOddImageNum((current) => (current + 2) % images.length),
    { interval: 2 * switchTime, delay: 2.5 * switchTime }
  );

  return (
    <>
      <BackgroundLayer
        style={{
          "--opacity": showEvens ? 1 : 0,
        }}
        bgImage={images[evenImageNum]}
      />
      <BackgroundLayer
        style={{
          "--opacity": showEvens ? 0 : 1,
        }}
        bgImage={images[oddImageNum]}
      />
    </>
  );
};

const BackgroundLayer = styled.div(({ bgImage }) => [
  tw`absolute
    inset-0
    bg-center
    bg-no-repeat
    bg-cover`,
  css`
    background-image: url(${`/images/${bgImage}`});
    opacity: var(--opacity, 0);
    transition: opacity 1s linear;
    min-height: calc(var(--vh, 1vh) * 100);
    /* See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
  `,
]);

export default ImageFader;
