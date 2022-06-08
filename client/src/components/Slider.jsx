import SimpleImageSlider from 'react-simple-image-slider';
import React from 'react';

export default function Slider({ width, height, images }) {
  return (
    <SimpleImageSlider 
      width={width}
      height={height}
      images={images}
      showBullets={true}
      showNavs={true}
      autoPlay={true}
      loop={true}
    />
  );
}