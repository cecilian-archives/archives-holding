import { useEffect, useRef } from "react";

export const useInterval = (callback, { interval }) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (interval !== null) {
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }
  }, [interval]);
};

export const useDelayedInterval = (callback, { interval, delay }) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval after a delay.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = null;
    function setup() {
      tick();
      id = setInterval(tick, interval);
    }

    if (interval !== null && delay !== null) {
      setTimeout(setup, delay);
      return () => clearInterval(id);
    }
  }, [interval]);
};
