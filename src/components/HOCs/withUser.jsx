import React from 'react';
import { UserContext } from './../../contexts';

/**
 *
 * @param {React.FunctionComponent|React.Component} WrappedComponent
 * @returns {React.FunctionComponent}
 */
function withUser(WrappedComponent) {
  /**
   *
   * @param {*} props
   */
  const WrappedComponentWithUser = props => (
    <UserContext.Consumer>
      {([user, setUser]) => (
        <WrappedComponent user={user} setUser={setUser} {...props} />
      )}
    </UserContext.Consumer>
  );

  WrappedComponentWithUser.displayName = `${WrappedComponent.name}WithUser`;

  return WrappedComponentWithUser;
}

export default withUser;
