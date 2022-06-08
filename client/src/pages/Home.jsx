import React from 'react';
import Slider from '../components/Slider';

export default function Home() {
  const images = [
    'https://demo.zantetheme.com/wp-content/uploads/2018/04/slider-3.jpg',
    'https://demo.zantetheme.com/wp-content/uploads/2018/04/slider-2.jpg',
    'https://demo.zantetheme.com/wp-content/uploads/2018/02/slider-1.jpg'
  ]

  return (
    <Slider width={window.innerWidth} height={window.innerHeight - 115} images />
  );
}