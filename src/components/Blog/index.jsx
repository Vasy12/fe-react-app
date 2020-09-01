import React from 'react';
import styles from './Blog.module.scss';
import classNames from 'classnames';
import { ThemeContext } from '../../contexts';
import { THEME_VALUES } from '../../constants';
import { withUser } from './../HOCs';

function Article(props) {
  const { title, body } = props;

  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

function Blog(props) {
  const { articles, user } = props;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const containerClassName = classNames(
          styles.container,
          theme === THEME_VALUES.LIGHT ? styles.lightTheme : styles.darkTheme
        );

        return (
          <section className={containerClassName}>
            <h1>Blog</h1>
            {articles.map((a, index) => (
              <Article key={index} {...a} />
            ))}
          </section>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default withUser(Blog);
