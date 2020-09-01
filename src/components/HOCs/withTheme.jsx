import React from 'react';
import { ThemeContext } from './../../contexts';

function withTheme(WrappedComponent) {
  function WrappedComponentWithTheme(props) {
    return React.createElement(ThemeContext.Consumer, {
      children: value =>
        React.createElement(WrappedComponent, { ...props, ...value }),
    });
  }

  WrappedComponentWithTheme.displayName = `${
    WrappedComponent.displayName ?? WrappedComponent.name
  }WithTheme`;

  return WrappedComponentWithTheme;
}

export default withTheme;
