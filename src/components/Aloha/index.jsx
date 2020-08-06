import React from 'react';
import styles from './Aloha.module.css';

const Aloha = props => {
  const { name, isGreeting = true } = props;

  return (
    <div className={styles.container}>
      {isGreeting ? 'Hello' : 'Goodbye'} {name}
    </div>
  );
};

export default Aloha;
