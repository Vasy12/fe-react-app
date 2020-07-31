import React, { useState } from 'react';
import Stopwatch from './components/Stopwatch';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        switch
      </button>
      {isVisible && <Stopwatch />}
    </>
  );
};

export default App;
