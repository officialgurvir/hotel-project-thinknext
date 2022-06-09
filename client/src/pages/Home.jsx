import React from 'react';
import Slider from '../components/Slider';

export default function Home() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [images, setImages] = React.useState([]);
  const [options, setOptions] = React.useState({width: window.innerWidth, height: window.innerHeight - 95});

  const debounce = (cb, delay = 1000) => {
    let timer;

    return (...args) => {
      clearInterval(timer);
      timer = setInterval(() => cb(...args), delay);
    }
  }

  const setDimensions = debounce(() => setOptions({
    width: window.innerWidth,
    height: window.innerHeight - 95
  }))

  React.useLayoutEffect(function () {
    const getImages = async function () {
      const request = await fetch('http://localhost:3001/get/slider_images');
      const response = await request.json();

      return response;
    }

    getImages().then(slider_images => {
      setImages(slider_images)
    });
  }, []);

  window.addEventListener('resize', setDimensions);

  return (
    <div className='relative w-screen h-[87.5vh] overflow-hidden'>
      <div className='absolute z-0 top-0 left-0 right-0 bottom-0'>
        <Slider setSlideIndex={setSlideIndex} {...options} images={images.map(img => img.url)} />
      </div>
      <div className='absolute z-10 w-screen flex justify-center items-center h-full pointer-events-none bg-[rgba(0,0,0,0.4)] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <div className='w-max text-white h-auto flex justify-center items-center flex-col'>
          <span className='font-bold uppercase mb-3 text-6xl'>{images[slideIndex].heading}</span>
          <span className='text-lg font-medium'>{images[slideIndex].subheading}</span>
        </div>
      </div>
    </div>
  );
}