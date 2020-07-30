import React, { Component } from 'react';
import Aloha from './components/Aloha';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [
        {
          id: 1,
          firstName: 'Test',
          lastName: 'Testovich',
        },
        {
          id: 85684,
          firstName: 'Maria',
          lastName: 'Testovna',
        },
        {
          id: 37126365,
          firstName: 'Misha',
          lastName: 'Ivanov',
        },
        {
          id: 4,
          firstName: 'Fred',
          lastName: 'Fredovich',
        },
      ],
    };

    this.switchSortDir = false;
  }

  sortGuests = () => {
    const { guests } = this.state;

    const sortedGuests = JSON.parse(JSON.stringify(guests)).sort((a, b) => {
      if (a.firstName > b.firstName) {
        return this.switchSortDir ? -1 : 1;
      }
      if (a.firstName < b.firstName) {
        return this.switchSortDir ? 1 : -1;
      }
      return 0;
    });

    this.setState({
      guests: sortedGuests,
    });
    this.switchSortDir = !this.switchSortDir;
  };

  mapGuests = () =>
    this.state.guests.map(({ id, firstName, lastName }) => (
      <Aloha key={id} name={`${id} ${firstName} ${lastName}`} />
    ));

  render() {
    return (
      <>
        <button onClick={this.sortGuests}>SORT</button>
        <div>{this.mapGuests()}</div>
      </>
    );
  }
}

export default App;
