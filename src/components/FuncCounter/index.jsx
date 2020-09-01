import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Counter(props) {
  const { step } = props;
  const [countValue, setCountValue] = useState(0);

  useEffect(() => {
    const handleBodyClick = () => {
      setCountValue(prevValue => prevValue + step);
    };
    document.body.addEventListener('dblclick', handleBodyClick);
    return () => {
      document.body.removeEventListener('dblclick', handleBodyClick);
    };
  }, [step]);

  const decrement = () => {
    setCountValue(countValue - step);
  };
  const increment = () => {
    setCountValue(countValue + step);
  };

  return (
    <article>
      <h1>{countValue}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </article>
  );
}

Counter.propTypes = {
  step: PropTypes.number,
};

Counter.defaultProps = {
  step: 1,
};

export default Counter;

function test() {
  let i = 0;
}
