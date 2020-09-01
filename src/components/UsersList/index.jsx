import React from 'react';
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.scss';
function UsersList(props) {
  const { users } = props;

  return (
    <ol className={styles.container}>
      {users.map(u => (
        <li key={u.email}>
          <UserCard {...u} />
        </li>
      ))}
    </ol>
  );
}

export default UsersList;
