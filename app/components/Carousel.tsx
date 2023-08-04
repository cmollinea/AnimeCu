'use client';
import Hero from './Hero';
import ActualSeason from '../mocks/ActualSeason.json';
import { AnimeOnEmision } from '@/types/emision';

const AnimeArr = ActualSeason.data.slice(0, 9);

//Hacer una llamada a la APi con un limit de 10
//para buscar los animes mas populares en emision o sea
//de la temporada asignarlos a una variable el array
// y pasar como prop cada uno

function Carousel() {
  console.log(AnimeArr.length);

  return (
    <>
      <div className='carousel w-full'>
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
      </div>
    </>
  );
}

export default Carousel;
