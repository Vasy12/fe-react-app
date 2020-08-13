import React from 'react';
import PropTypes from 'prop-types';

function Col(props) {
  const { col, children } = props;
  return <div className={`col-${col}`}>{children}</div>;
}

Col.propTypes = {
  col: PropTypes.number.isRequired,
};

export default Col;
