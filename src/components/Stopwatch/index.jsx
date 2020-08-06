import React, { Component } from 'react';
import styles from './Stopwatch.module.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.timeoutId = null;
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newDate = new Date(time.getTime());
      newDate.setSeconds(newDate.getSeconds() + 1);
      return {
        time: newDate,
      };
    });
  };

  start = () => {
    this.setState({
      isRunning: true,
    });
  };

  stop = () => {
    this.setState({
      isRunning: false,
    });
  };

  clear = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  };

  /**
   * After first rendering
   */
  componentDidMount() {
    this.start();
  }

  /**
   * After rerendering
   */
  componentDidUpdate(prevProps, prevState) {
    const { isRunning } = this.state;
    this.clear();
    if (isRunning) {
      this.timeoutId = setTimeout(this.tick, 1000);
    }
  }

  /**
   * Before unmount
   */
  componentWillUnmount() {
    this.clear();
  }

  render() {
    const { time, isRunning } = this.state;

    return (
      <article className={styles.container}>
        <h1 className={styles.time}>{time.toLocaleTimeString('it-IT')}</h1>
        <button disabled={isRunning} onClick={this.start}>
          START
        </button>
        <button disabled={!isRunning} onClick={this.stop}>
          STOP
        </button>
        <button>RESET</button>
      </article>
    );
  }
}

export default Stopwatch;
