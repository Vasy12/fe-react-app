import React from 'react';
import styles from './../Tree.module.scss';
import SubSubParent from '../SubSubParent';

function SubParent(props) {
  return (
    <article>
      <h1>SubParent</h1>
      <section className={styles.container}>
        <SubSubParent />
      </section>
    </article>
  );
}

export default SubParent;
