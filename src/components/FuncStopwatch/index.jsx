import React, { useState, useEffect } from 'react';
import { startOfYear, format, addMilliseconds } from 'date-fns';

function Stopwatch() {
  const [time, setTime] = useState(startOfYear(new Date()));
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setTime(prevValue => addMilliseconds(prevValue, 1000));
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRunning, time]);

  return (
    <article>
      <h1>{format(time, 'HH:mm:ss')}</h1>
      <button onClick={() => void setIsRunning(!isRunning)}>
        {isRunning ? 'stop' : 'start'}
      </button>
      <button
        onClick={() => {
          setTime(startOfYear(time));
        }}
      >
        reset
      </button>
    </article>
  );
}

export default Stopwatch;
