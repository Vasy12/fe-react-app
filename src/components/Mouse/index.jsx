import React from 'react';

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    const { render } = this.props;
    return (
      <div
        style={{ height: '100vh', border: '10px solid red' }}
        onMouseMove={this.handleMouseMove}
      >
        {true}
        {render(this.state)}
      </div>
    );
  }
}

export default Mouse;
