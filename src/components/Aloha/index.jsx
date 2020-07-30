import React from 'react';

const Aloha = props => {
  const { name, isGreeting = true } = props;

  return (
    <div>
      {isGreeting ? 'Hello' : 'Goodbye'} {name}
    </div>
  );
};

export default Aloha;
