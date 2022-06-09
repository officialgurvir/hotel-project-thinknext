import SimpleImageSlider from 'react-simple-image-slider';
import React from 'react';

export default function Slider({ width, setSlideIndex, height, images }) {
  return (
    <SimpleImageSlider 
      width={width}
      height={height}
      onStartSlide={(idx) => setSlideIndex(idx - 1)}
      images={images}
      showBullets={false}
      showNavs={true}
      autoPlay={true}
      loop={true}
    />
  );
}