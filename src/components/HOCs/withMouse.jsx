import React from 'react';

/**
 *
 * @param {React.FunctionComponent|React.Component} WrappedComponent
 * @returns {React.Component}
 */
function withMouse(WrappedComponent) {
  // Create new class-component
  class Mouse extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        x: 0,
        y: 0,
      };
    }

    handleMouseMove = ({ clientX: x, clientY: y }) =>
      void this.setState({
        x,
        y,
      });

    componentDidMount() {
      document.body.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
      document.body.removeEventListener('mousemove', this.handleMouseMove);
    }

    render() {
      return React.createElement(WrappedComponent, {
        mouse: this.state,
        ...this.props,
      });
    }
  }

  Mouse.displayName = `${
    WrappedComponent.displayName ?? WrappedComponent.name
  }WithMouse`;

  return Mouse;
}

export default withMouse;
