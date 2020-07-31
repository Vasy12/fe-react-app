import React, { Component } from 'react';
import UserListItem from './UserListItem';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 1,
          name: 'Test',
          surname: 'Testovich',
        },
        {
          id: 2,
          name: 'Test2',
          surname: 'Testovich2',
        },
        {
          id: 3,
          name: 'Test3',
          surname: 'Testovich3',
        },
        {
          id: 4,
          name: 'Test4',
          surname: 'Testovich4',
        },
      ],
    };
  }

  mapUser = user => {
    return <UserListItem key={user.id} user={user} />;
  };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}

export default UsersList;
