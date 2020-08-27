import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter(props) {
  const { step } = props;
  const [countValue, setCountValue] = useState(0);

  return (
    <article>
      <h1>{countValue}</h1>
      <button
        onClick={() => {
          setCountValue(countValue - step);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCountValue(countValue + step);
        }}
      >
        +
      </button>
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
