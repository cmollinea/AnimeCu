'use client';
import Hero from './Hero';
import ActualSeason from '../mocks/ActualSeason.json';
import React, { useEffect, useState } from 'react';
import { AnimeOnEmision } from '@/types/emision';

type Props = {
  animesOnEmision: AnimeOnEmision[];
};

function Carousel({ animesOnEmision }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (currentSlide < animesOnEmision.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 8000);
    return () => clearInterval(sliderInterval);
  }, [currentSlide, animesOnEmision]);

  return (
    <>
      <section className='flex flex-col justify-center items-center transition-all duration-300 w-[90%]'>
        {/* Tuve que ser repetitivo para poder tener el efecto fade in */}
        {currentSlide === 0 && <Hero anime={animesOnEmision[0]} />}
        {currentSlide === 1 && <Hero anime={animesOnEmision[1]} />}
        {currentSlide === 2 && <Hero anime={animesOnEmision[2]} />}
        {currentSlide === 3 && <Hero anime={animesOnEmision[3]} />}
        {currentSlide === 4 && <Hero anime={animesOnEmision[4]} />}
        {currentSlide === 5 && <Hero anime={animesOnEmision[5]} />}
        {currentSlide === 6 && <Hero anime={animesOnEmision[6]} />}
        {currentSlide === 7 && <Hero anime={animesOnEmision[7]} />}
        {currentSlide === 8 && <Hero anime={animesOnEmision[8]} />}
        {currentSlide === 9 && <Hero anime={animesOnEmision[9]} />}
      </section>
      <div className='flex gap-2'>
        {animesOnEmision?.map((slide, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mt-10 transition-all duration-500 cursor-pointer hover:bg-lime-400/50 ${
              currentSlide === index ? 'bg-lime-400' : 'bg-base-300/80'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Carousel;
