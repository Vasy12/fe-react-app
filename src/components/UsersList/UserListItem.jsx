import React from 'react';

const UserListItem = props => {
  const {
    user: { id, name, surname },
  } = props;

  return (
    <li>
      ID: "{id}"; FULL NAME: "{name} {surname}";
    </li>
  );
};

export default UserListItem;
