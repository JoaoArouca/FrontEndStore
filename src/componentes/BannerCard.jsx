import React from 'react';
import Slider from 'react-animated-slider';

function BannerCard() {
  const time = 2000;
  const images = [
    {
      id: 1,
      src: 'https://http2.mlstatic.com/D_NQ_830169-MLA49590766661_042022-OO.webp',
      alt: 'imageOne',
    },
    {
      id: 2,
      src: 'https://http2.mlstatic.com/D_NQ_693302-MLA50096356137_052022-OO.webp',
      alt: 'imageTwo',
    },
    {
      id: 3,
      src: 'https://http2.mlstatic.com/D_NQ_870785-MLA49774982861_042022-OO.webp',
      alt: 'imageThree',
    },
    {
      id: 4,
      src: 'https://http2.mlstatic.com/D_NQ_621659-MLA50023112352_052022-OO.webp',
      alt: 'imageFour',
    },
    {
      id: 5,
      src: 'https://http2.mlstatic.com/D_NQ_838391-MLA50077731712_052022-OO.webp',
      alt: 'imageFive',
    },
  ];

  return (
    <Slider autoplay={time}>
      {
        images.map((image) => (
          <img
            src={image.src}
            alt={image.alt}
          />
        ))
      }
    </Slider>
  );
}

export default BannerCard;
