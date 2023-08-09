'use client';
import Hero from './Hero';
import ActualSeason from '../mocks/ActualSeason.json';
import React, { useEffect, useState } from 'react';
import { AnimeOnEmision } from '@/types/emision';

const AnimeArr = ActualSeason.data.slice(0, 9);

//TODO Hacer una llamada a la APi con un limit de 10  para buscar los animes mas populares en emision o sea de la temporada asignarlos a una variable el array y pasar como prop cada uno

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (currentSlide < AnimeArr.length - 1) {
        console.log('Mayor que 4');
        setCurrentSlide((prev) => prev + 1);
      } else {
        console.log('Menor que 4');
        setCurrentSlide(0);
      }
    }, 5000);
    return () => clearInterval(sliderInterval);
  }, [currentSlide]);

  return (
    <>
      <section className='flex flex-col justify-center items-center transition-all duration-300 w-[90%]'>
        {/* Tuve que ser repetitivo para poder tener el efecto fade in */}
        {currentSlide === 0 && <Hero anime={AnimeArr[0] as AnimeOnEmision} />}
        {currentSlide === 1 && <Hero anime={AnimeArr[1] as AnimeOnEmision} />}
        {currentSlide === 2 && <Hero anime={AnimeArr[2] as AnimeOnEmision} />}
        {currentSlide === 3 && <Hero anime={AnimeArr[3] as AnimeOnEmision} />}
        {currentSlide === 4 && <Hero anime={AnimeArr[4] as AnimeOnEmision} />}
        {currentSlide === 5 && <Hero anime={AnimeArr[5] as AnimeOnEmision} />}
        {currentSlide === 6 && <Hero anime={AnimeArr[6] as AnimeOnEmision} />}
        {currentSlide === 7 && <Hero anime={AnimeArr[7] as AnimeOnEmision} />}
        {currentSlide === 8 && <Hero anime={AnimeArr[8] as AnimeOnEmision} />}
        {currentSlide === 9 && <Hero anime={AnimeArr[9] as AnimeOnEmision} />}
      </section>
      <div className='flex gap-2'>
        {AnimeArr.map((slide, index) => (
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

// Old Way

{
  /* <div className='carousel w-full'>
        <div id='item1' className='carousel-item w-full'>
          <Hero anime={AnimeArr[0] as AnimeOnEmision} />{' '}
        </div>
        <div id='item2' className='carousel-item w-full'>
          <Hero anime={AnimeArr[1] as AnimeOnEmision} />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <Hero anime={AnimeArr[2] as AnimeOnEmision} />
        </div>
        <div id='item4' className='carousel-item w-full'>
          <Hero anime={AnimeArr[3] as AnimeOnEmision} />
        </div>
        <div id='item5' className='carousel-item w-full'>
          <Hero anime={AnimeArr[4] as AnimeOnEmision} />
        </div>
        <div id='item6' className='carousel-item w-full'>
          <Hero anime={AnimeArr[5] as AnimeOnEmision} />
        </div>
        <div id='item7' className='carousel-item w-full'>
          <Hero anime={AnimeArr[6] as AnimeOnEmision} />
        </div>
        <div id='item8' className='carousel-item w-full'>
          <Hero anime={AnimeArr[7] as AnimeOnEmision} />
        </div>
        <div id='item9' className='carousel-item w-full'>
          <Hero anime={AnimeArr[8] as AnimeOnEmision} />
        </div>
        <div id='item10' className='carousel-item w-full'>
          <Hero anime={AnimeArr[9] as AnimeOnEmision} />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        {AnimeArr.map((anime, index) => (
          <a
            key={anime.mal_id}
            href={`#item${index + 1}`}
            className={`btn btn-xs hover:bg-teal-400 text-gray-200`}
          >
            {index + 1}
          </a>
        ))}
      </div> */
}
