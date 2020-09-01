import { useState, useEffect } from 'react';

function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
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

  return mouse;
}

export default useMouse;
