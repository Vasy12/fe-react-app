import React, { Component } from 'react';
import UserListItem from './UserListItem';

const dbData = [
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
];

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: dbData.map(u => ({ ...u, isSelected: false })),
    };
  }

  mapUser = (user, index) => {
    const { users } = this.state;
    const selectUserHandler = () => {
      //const newUsers = JSON.parse(JSON.stringify(users)); // плохА
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      this.setState({
        users: newUsers,
      });
    };

    return (
      <UserListItem
        key={user.id}
        user={user}
        onSelect={selectUserHandler}
        isSelected={user.isSelected}
      />
    );
  };

  render() {
    const { users } = this.state;
    return <ul>{users.map(this.mapUser)}</ul>;
  }
}
// Parent => Child = props
// Child => Parent = callback
export default UsersList;
