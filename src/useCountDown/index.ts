import { useState, useRef } from 'react';

const useCountDown = (time = 60) => {
  const [isCountDowning, setCountDowning] = useState(false);
  const [remaning, setRemaining] = useState(time);
  const timer = useRef<number>();

  const start = () => {
    clearTimeout(timer.current);
    setRemaining(time);
    setCountDowning(true);
    const run = () => {
      timer.current = window.setTimeout(() => {
        setRemaining((r) => {
          if (r - 1 > 0) {
            run();
          } else {
            setCountDowning(false);
          }
          return r - 1;
        });
      }, 1000);
    };
    run();
  };
  return [{ isCountDowning, remaning }, { start }] as const;
};

export default useCountDown;
