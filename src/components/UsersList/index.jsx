import React from 'react';

const userItemStyle = {
  margin: '10px',
  border: '2px solid red',
};

function UsersList(props) {
  const { users } = props;

  return (
    <ol>
      {users.map(u => (
        <li style={userItemStyle} key={u.email}>
          {JSON.stringify(u, null, '\t')}
        </li>
      ))}
    </ol>
  );
}

export default UsersList;
