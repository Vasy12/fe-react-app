import React, { Component } from 'react';
import Slide from './Slide';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delay: 1000,
      isPlaying: false,
      isFullScreen: false,
      currentIndex: 0,
    };
  }

  get nextIndex() {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    return (currentIndex + 1) % slides.length;
  }

  get prevIndex() {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    return (currentIndex - 1 + slides.length) % slides.length;
  }

  static getNextIndex(index, slides) {
    return (index + 1) % slides.length;
  }

  static getPrevIndex(index, slides) {
    return (index - 1 + slides.length) % slides.length;
  }

  render() {
    const { slides, download = true } = this.props;
    const { currentIndex } = this.state;
    return (
      <article>
        {download && (
          <>
            <Slide download {...slides[this.prevIndex]} />
            <Slide download {...slides[currentIndex]} isCurrent />
            <Slide download {...slides[this.nextIndex]} />
          </>
        )}
        <button>{'<<'}</button>
        <button>{'>>'}</button>
      </article>
    );
  }
}

export default Carousel;
