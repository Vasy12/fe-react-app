import React, { Component } from 'react';
import Form from './Form';

class HyperlinksParser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      error: null,
      htmlText: '',
    };
  }

  fetchHtmlDocument = url => {
    fetch(url, {
      method: 'GET',
      'Content-type': 'text/html',
    })
      .then(response => response.text())
      .then(data => {
        this.setState({
          htmlText: data,
        });
      });
  };

  handleSubmit = ({ values: { urlValue } }) => {
    this.fetchHtmlDocument(urlValue);
  };

  render() {
    const { htmlText } = this.state;
    return (
      <article>
        <Form onSubmit={this.handleSubmit} />
        <section>
          <h1>HTML</h1>
          <p>{htmlText}</p>
        </section>
      </article>
    );
  }
}

export default HyperlinksParser;
