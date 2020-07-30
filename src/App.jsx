import React, { Component } from 'react';
import Aloha from './components/Aloha';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'React.js',
      isGreetingMode: true,
      isVisible: false,
    };
  }

  switchMode = () => {
    const { isGreetingMode, isVisible } = this.state;
    this.setState({
      isGreetingMode: !isGreetingMode,
      isVisible: !isVisible,
    });
  };

  render() {
    const { userName, isGreetingMode, isVisible } = this.state;

    return (
      <>
        {isVisible && <h1>Visible</h1>}
        <button onClick={this.switchMode}>Change MODE</button>
        <Aloha name={userName} isGreeting={isGreetingMode} />
      </>
    );
  }
}

export default App;
