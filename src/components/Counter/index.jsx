import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  increment = () => {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({
      value: value + step,
    });
  };

  decrement = () => {
    const { value } = this.state;
    const { step } = this.props;
    this.setState({
      value: value - step,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }

  render() {
    console.log('COUNTER RENDER');

    const { value } = this.state;
    const containerStyles = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '40px',
      border: '10px solid blue',
      borderRadius: '10px',
      maxWidth: '320px',
    };
    return (
      <article style={containerStyles}>
        <h1>{value}</h1>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </article>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number,
};

Counter.defaultProps = {
  step: 1,
};

export default Counter;
