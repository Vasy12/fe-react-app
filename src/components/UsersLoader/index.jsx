import React, { Component } from 'react';
import { getUsers } from './../../api';

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      users: [],
      error: null,
      currentPage: 1,
    };
  }

  loadUsers = () => {
    const { currentPage } = this.state;
    getUsers({
      page: currentPage,
    })
      .then(data => {
        this.setState({
          users: data.results,
          isFetching: false,
        });
      })
      .catch(error => {
        this.setState({
          error,
          isFetching: false,
        });
      });
  };

  componentDidMount() {
    this.loadUsers();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.loadUsers();
    }
  }

  prev = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1,
      });
    }
  };

  next = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };

  render() {
    const { users, error, isFetching, currentPage } = this.state;

    if (error) {
      return <div>Error</div>;
    }

    if (isFetching) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <h1>{currentPage}</h1>
        <button onClick={this.prev}>prev page</button>
        <button onClick={this.next}>next page</button>
        <ul>
          <li>
            <h2>USERS LIST:</h2>
          </li>
          {users.map(u => (
            <li key={`${u.email}`}>
              <br />
              {JSON.stringify(u, null, '\t')}
              <br />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default UsersLoader;
