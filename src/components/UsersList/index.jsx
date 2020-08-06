import React from 'react';
import UserListItem, { userProp } from './UserListItem';
import PropTypes from 'prop-types';

const UsersList = props => {
  const { users, setUsers } = props;

  const mapUser = (user, index) => {
    const selectUserHandler = () => {
      //const newUsers = JSON.parse(JSON.stringify(users)); // плохА
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
    };

    return (
      <UserListItem
        key={user.id}
        user={user}
        onSelect={selectUserHandler}
        isSelected={user.isSelected ?? false}
      />
    );
  };

  return <ul>{users.map(mapUser)}</ul>;
};

UsersList.protoTypes = {
  users: PropTypes.arrayOf(userProp).isRequired,
};

// Parent => Child = props
// Child => Parent = callback
export default UsersList;
