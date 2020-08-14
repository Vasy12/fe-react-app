import React, { Component } from 'react';

class ViewportSize extends Component {
  constructor(props) {
    super(props);

    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = ({ target: { innerHeight, innerWidth } }) => {
    this.setState({
      w: innerWidth,
      h: innerHeight,
    });
  };

  render() {
    const { w, h } = this.state;
    return (
      <article>
        <table>
          <tbody>
            <tr>
              <th>WIDTH:</th>
              <td>{w}</td>
            </tr>
            <tr>
              <th>HEIGHT</th>
              <td>{h}</td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
}

export default ViewportSize;
