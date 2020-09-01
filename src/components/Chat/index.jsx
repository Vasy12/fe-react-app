import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const data = {
  members: [
    {
      id: 1,
      name: 'Sasha',
    },
    {
      id: 2,
      name: 'Tanya',
    },
  ],
  messages: [
    {
      id: '123',
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 1,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
    {
      authorId: 2,
      body: 'Message text',
    },
  ],
};

const getData = () => data;

function Chat(props) {
  const [state, dispatch] = useReducer(reducer, {
    members: new Map(),
    messages: [],
  });

  useEffect(() => {
    const data = getData();

    dispatch({
      type: 'DATA_RESPONSE_SUCCESS',
      data,
    });
  }, []);

  const { messages } = state;

  return (
    <ol>
      {messages.map((m, index) => (
        <li key={index}>{JSON.stringify(m)}</li>
      ))}
    </ol>
  );
}

Chat.propTypes = {};

export default Chat;
