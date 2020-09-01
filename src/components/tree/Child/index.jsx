import React from 'react';
import { UserContext } from '../../../contexts';

class Child extends React.Component {
  render() {
    const userValueFromContext = this.context;
    return (
      <article>
        <h1>Child: {JSON.stringify(userValueFromContext)}</h1>
        <img src={userValueFromContext.profilePicture} alt="" />
      </article>
    );
  }
}

Child.contextType = UserContext;

export default Child;
