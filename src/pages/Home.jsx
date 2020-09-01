import React, { useState } from 'react';
import { useCallback, useMemo } from 'react';

function Home() {
  const [value, setValue] = useState(0);
  const [theme, setTheme] = useState('light');

  const handleChange = useCallback(
    ({ target: { value } }) => setValue(Number(value)),
    []
  );

  const handleThemeBtnClick = useCallback(
    () => setTheme(prevValue => (prevValue === 'light' ? 'dark' : 'light')),
    []
  ); // memorize callback function between renders

  const result = useMemo(() => complexCode(value), [value]); // memorize result

  const style = useMemo(
    () => ({
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
    }),
    [theme]
  );

  return (
    <>
      <h1 style={style}>RESULT = {result}</h1>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={handleThemeBtnClick}>switch theme</button>
    </>
  );
}

function complexCode(value) {
  for (let i = 0; i < 10000000; i++) {
    const test = (Math.random() * i) / Math.random();
  }

  return value ** 3;
}

export default Home;
