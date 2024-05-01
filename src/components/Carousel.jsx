import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Text } from '@radix-ui/themes';
import iphone1 from '../../public/iphone1.jpg'
import iphone2 from '../../public/iphone2.jpg'
import iphone3 from '../../public/iphone3.jpg'
import iphone4 from '../../public/iphone4.jpg'
import iphone5 from '../../public/iphone5.jpg'

export const Carousel = () => {
  const images = [
    iphone1,
    iphone2,
    iphone3,
    iphone4,
    iphone5,
  ]

  const [currentImage, setCurrentImage] = useState(undefined)

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0])
  }, [])

  return (
    <Box className='my-10 text-center'>
      <Box>
        <div className=" flex items-center flex-col">
          <img src={currentImage} alt="" className="h-[450px] text-center" />
          <div className="flex justify-left mt-4 w-full h-16 gap-4">
            {images.map((image, i) => (
              <div
                key={i}
                className=" flex bg-cover mr-2 h-[70px] w-[50px] bg-cover bg-center cursor-pointer hover:border-2 border-colorLink"
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </div>
      </Box>
      <Box className='text-left text-sm my-10'>
        <Text className='text-left'>
          Екран (6.1", OLED (Super Retina XDR), 2532x1170) / Apple A15 Bionic / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 15
        </Text>
      </Box>
    </Box>

  );
};

export default Carousel;
