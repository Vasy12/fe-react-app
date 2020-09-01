import React from 'react';
import styles from './../Tree.module.scss';
import SubParent from '../SubParent';
import Child from '../Child';

function MainParent(props) {
  return (
    <article>
      <h1>MainParent</h1>
      <section className={styles.container}>
        <SubParent />
        <Child />
      </section>
    </article>
  );
}

export default MainParent;
