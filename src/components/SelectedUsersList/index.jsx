import React from 'react';

function SelectedUsersList(props) {
  const { users } = props;
  const selectedUsers = users.filter(u => u.isSelected);
  return (
    <ol>
      {selectedUsers.map(u => (
        <li key={u.id}>
          {u.name} {u.id}
        </li>
      ))}
    </ol>
  );
}

export default SelectedUsersList;
