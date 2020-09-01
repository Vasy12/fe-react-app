import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withMouse, withUser } from '../HOCs';
import withTheme from '../HOCs/withTheme';

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
    return !(
      _.isEqual(this.props, nextProps) && _.isEqual(this.state, nextState)
    );
  }

  render() {
    console.log('COUNTER RENDER');
    const { value } = this.state;
    const { step, mouse } = this.props;
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
        <h1>COUNT: {value}</h1>
        <h2>STEP: {step}</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <button
            onClick={() => {
              this.setState({
                value,
              });
            }}
          >
            set same value
          </button>
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

export default withUser(withTheme(withMouse(Counter)));
