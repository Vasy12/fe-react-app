import React from 'react';
import PropTypes from 'prop-types';

function LabeledInput(props) {
  const { label, ...rest } = props;
  return (
    <label>
      <span>{label}</span>
      <input {...rest} />
    </label>
  );
}

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabeledInput;
