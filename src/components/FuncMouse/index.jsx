import React, { useState, useEffect } from 'react';

function Mouse(props) {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(function () {
    const handleMouseMove = ({ clientX, clientY }) => {
      setMouse({
        x: clientX,
        y: clientY,
      });
    };
    document.body.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <h1>X: {mouse.x}</h1>
      <h1>Y: {mouse.y}</h1>
    </>
  );
}

export default Mouse;
