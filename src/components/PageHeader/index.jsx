import React, { useContext, useCallback } from 'react';
import { AppContext } from '../../App';
import { useEffect } from 'react';
import styles from './PageHeader.module.scss';

function PageHeader(props) {
  const {
    menu: [isMenuOpen, setIsMenuOpen],
  } = useContext(AppContext);

  const handleMenuBtnClick = useCallback(
    () => setIsMenuOpen(prevValue => !prevValue),
    []
  );

  useEffect(() => {
    console.log('CLICK CALLBACK CREATED');
  }, [handleMenuBtnClick]);

  return (
    <header className={styles.container} style={{ border: '2px solid orange' }}>
      <button onClick={handleMenuBtnClick}>
        {isMenuOpen ? 'close' : 'open'}
      </button>
    </header>
  );
}

export default PageHeader;
