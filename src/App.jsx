import React, { Component } from 'react';
import UsersList from './components/UsersList';
import SelectedUsersList from './components/SelectedUsersList';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: dbData.map(u => ({ ...u, isSelected: false })),
    };
  }

  setUsers = newUsers => {
    this.setState({
      users: newUsers,
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <UsersList users={users} setUsers={this.setUsers} />
        <SelectedUsersList users={users} />
      </>
    );
  }
}

export default App;
