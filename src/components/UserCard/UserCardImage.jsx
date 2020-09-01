import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.scss';
import { stringToHexColor } from '../../utils/string';

function UserCardImage(props) {
  const {
    src,
    name: { title, first, last },
    name,
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [img] = useState(new Image());

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);
    img.addEventListener('load', handleLoad);
    return () => {
      img.removeEventListener('load', handleLoad);
    };
  }, [img]);

  useEffect(() => {
    setIsLoaded(false);
    img.src = src;
  }, [src]);

  const backgroundColor = useMemo(
    () => stringToHexColor(`${title}${first}${last}`),
    [name]
  );

  return (
    <div
      style={{
        backgroundColor,
      }}
      className={styles.imageWrapper}
    >
      {isLoaded ? (
        <img src={src} alt={`${first} ${last}`} />
      ) : (
        <span className={styles.initials}>
          {first[0] ?? ''}
          {last[0] ?? ''}
        </span>
      )}
    </div>
  );
}

UserCardImage.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.object.isRequired,
};

export default UserCardImage;
