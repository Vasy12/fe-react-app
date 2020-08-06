import React, { Component } from 'react';
import styles from './Slide.module.scss';
import classNames from 'classnames';
import defaultImage from './Black.png';

class Slide extends Component {
  constructor(props) {
    super(props);

    const img = new Image();

    img.addEventListener('load', this.handleLoad);
    img.addEventListener('error', this.handleError);

    this.state = {
      img,
      isLoaded: false,
      error: null,
    };
  }

  handleLoad = () => {
    this.setState({
      isLoaded: true,
    });
  };
  handleError = () => {
    this.setState({
      error: true,
    });
  };

  load = () => {
    const { img } = this.state;
    const { src } = this.props;
    img.src = src;
  };

  componentDidMount() {
    const { download } = this.props;
    if (download) {
      this.load();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { download, src } = this.props;
    const { isLoaded, error } = this.state;
    if (download && !isLoaded && !error) {
      this.load();
    }

    if (this.props.src !== prevProps.src) {
      this.setState({
        isLoaded: false,
        error: null,
      });
    }
  }

  render() {
    const { isLoaded } = this.state;
    const { isCurrent, src, title, description } = this.props;

    const className = classNames(styles.slide, {
      [styles.currentSlide]: isCurrent,
    });

    return (
      <figure className={className} title={title}>
        <img src={isLoaded ? src : defaultImage} alt={title} />
        <figcaption>
          <h3>{title}</h3>
          <p>{description}</p>
        </figcaption>
      </figure>
    );
  }
}
export default Slide;
