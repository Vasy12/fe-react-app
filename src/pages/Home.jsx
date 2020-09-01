import React, { useReducer } from 'react';

import { format } from 'date-fns';

/**
 *
 * @param {object} state - prev state
 * @param {object} action - dispatched action
 * @returns {object} - new state
 */
const homeReducer = (state, action) => {
  const { name, value } = action;
  return {
    ...state,
    [name]: name === 'age' ? Number(value) : value,
  };
};

function Home() {
  const [state, dispatch] = useReducer(homeReducer, {
    firstName: '',
    lastName: '',
    email: '',
    age: 18,
    gender: null,
    tel: '',
    birthday: format(new Date(), 'yyyy-MM-dd'),
  });

  const handleChange = event => {
    const {
      target: { name, value },
    } = event;

    dispatch({
      name,
      value,
    });
  };

  return (
    <>
      <input
        type="text"
        name={'firstName'}
        value={state.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name={'lastName'}
        value={state.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name={'email'}
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="range"
        min={0}
        max={120}
        name={'age'}
        value={state.age}
        onChange={handleChange}
      />
      <input
        type="radio"
        name={'gender'}
        value={'male'}
        checked={state.gender === 'male'}
        onChange={handleChange}
      />
      <input
        type="radio"
        name={'gender'}
        value={'female'}
        checked={state.gender === 'female'}
        onChange={handleChange}
      />
      <input
        type="radio"
        name={'gender'}
        value={'other'}
        checked={state.gender === 'other'}
        onChange={handleChange}
      />
      <input
        type="tel"
        name={'tel'}
        value={state.tel}
        onChange={handleChange}
      />
      <input
        type="date"
        name={'birthday'}
        value={state.birthday}
        onChange={handleChange}
      />
    </>
  );
}

export default Home;
