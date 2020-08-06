import React, { Component } from 'react';

import Month from './Month';
class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(2020, 0, 1),
    };
  }

  render() {
    const { currentDate } = this.state;
    return (
      <article>
        <section></section>
        <section>
          <Month year={2020} month={-1} />
        </section>
      </article>
    );
  }
}

export default Calendar;
