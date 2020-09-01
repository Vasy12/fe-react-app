import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './AppNav.module.scss';
import { AppContext } from '../../App';

function AppNav() {
  const {
    menu: [isMenuOpen],
  } = useContext(AppContext);

  const menuClassName = classNames(styles.menu, {
    [styles.menuOpen]: isMenuOpen,
  });

  return (
    <section style={{ border: '2px solid blue' }}>
      <h1>Menu</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/users">users</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default AppNav;
