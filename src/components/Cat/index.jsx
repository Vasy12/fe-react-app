import React from 'react';
import { useMouse } from '../hooks';

function Cat(props) {
  const { x, y } = useMouse();

  return (
    <img
      src="https://static2.bigstockphoto.com/9/3/1/large1500/139955141.jpg"
      width={100}
      style={{ position: 'fixed', left: x, top: y }}
    />
  );
}

export default Cat;
