import React from 'react';
import ViewportSize from './components/ViewportSize';
import { useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        set {isVisible ? 'visible' : 'invisible'}
      </button>
      {isVisible && <ViewportSize />}
    </>
  );
};

export default App;
