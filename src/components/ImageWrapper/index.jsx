import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

function ImageWrapper(props) {
  const { width, height, style, ...restProps } = props;

  console.log(restProps);

  const inlineStyles = {
    ...style,
    width,
    height,
  };

  return <div style={inlineStyles} {...restProps} />;
}

ImageWrapper.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

ImageWrapper.defaultProps = {
  className: styles.wrapper,
};

export default ImageWrapper;
