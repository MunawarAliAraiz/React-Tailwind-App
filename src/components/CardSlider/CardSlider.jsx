import React from 'react';
import Slider from 'react-slick';
import GenericCard from '../Card/Card';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardSlider.css';

const CardSlider = ({ cards, cardsToShow }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: cardsToShow || 3,
    customPaging: function (i) {
        return <button className='custom-dot'></button>;
    },
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2, 
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1, 
          }
        }
    ]
  };

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <GenericCard {...card} />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;