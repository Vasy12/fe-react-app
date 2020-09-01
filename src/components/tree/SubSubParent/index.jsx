import React from 'react';
import styles from './../Tree.module.scss';
import Child from '../Child';

function SubSubParent(props) {
  return (
    <article>
      <h1>SubSubParent</h1>
      <section className={styles.container}>
        <Child />
      </section>
    </article>
  );
}

export default SubSubParent;
