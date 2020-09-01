import React from 'react';
import { withUser, withMouse } from '../HOCs';

function MessagesList(props) {
  const { messages, user, mouse } = props;
  return (
    <ol>
      <li>
        X: {mouse.x}; Y:: {mouse.y}
      </li>
      {messages.map(m => {
        return (
          <li key={m.id}>
            {m.body} author:{' '}
            {user.id === m.author.id ? 'You' : m.author.fullName}
          </li>
        );
      })}
    </ol>
  );
}

export default withMouse(withUser(MessagesList));
