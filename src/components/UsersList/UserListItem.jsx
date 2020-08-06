import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = props => {
  const {
    onSelect,
    isSelected,
    user: { id, name, surname },
  } = props;

  const styles = {
    backgroundColor: isSelected ? 'rgba(0,0,0,0.3)' : 'initial',
  };

  return (
    <li style={styles}>
      <span>
        ID: "{id}"; FULL NAME: "{name} {surname}";
      </span>
      <button onClick={onSelect}>SELECT ME</button>
    </li>
  );
};

export const userProp = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
});

UserListItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  user: userProp.isRequired,
  isSelected: PropTypes.bool,
};

UserListItem.defaultProps = {
  isSelected: false,
};

export default UserListItem;
