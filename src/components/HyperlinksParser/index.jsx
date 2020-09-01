import React, { Component } from 'react';
import Form from './Form';
import { useData } from '../hooks';
const getPageApi = () =>
  fetch('https://developer.mozilla.org/en-US/docs/Learn', {
    method: 'GET',
    'Content-type': 'text/html',
  }).then(response => response.text());

function HyperlinksParser(props) {
  const { isFetching, data: htmlText, error } = useData(getPageApi);

  return (
    <article>
      <section>
        <h1>HTML</h1>
        <p>{htmlText}</p>
      </section>
    </article>
  );
}

export default HyperlinksParser;
