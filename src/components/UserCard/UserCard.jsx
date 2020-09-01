import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './UserCard.module.scss';
import UserCardImage from './UserCardImage';
import { first } from 'lodash';

function UserCard(props) {
  const {
    name,
    picture: { large },
  } = props;
  const [isFlip, setIsFlip] = useState(false);

  const wrapperClassName = classNames(styles.innerWrapper, {
    [styles.innerWrapperFlip]: isFlip,
  });

  const flipBtn = useMemo(
    () => <button onClick={() => setIsFlip(pv => !pv)}>{'=>'}</button>,
    []
  );

  const initial = useMemo(() => `${name.first[0]}${name.last[0]}`, [name]);

  return (
    <article
      style={{
        border: initial === 'CL' ? '4px solid red' : 'initial',
      }}
      className={styles.container}
    >
      <div className={wrapperClassName}>
        <section className={styles.front}>
          <UserCardImage src={large} name={name} />
          {flipBtn}
        </section>
        <section className={styles.back}>{flipBtn}</section>
      </div>
    </article>
  );
}

UserCard.propTypes = {
  id: PropTypes.object,
  email: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['female', 'male']).isRequired,
  name: PropTypes.shape({
    title: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
  picture: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
