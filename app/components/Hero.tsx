import { AnimeOnEmision } from '@/types/emision';
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'animate.css';

type Props = {
  anime: AnimeOnEmision;
};

function Hero({ anime }: Props) {
  return (
    <div className='hero animate__animated animate__fadeInRight opacity-0 h-[400px] py-6 mx-auto relative overflow-hidden transition-all duration-300 ease-in-out'>
      {anime ? (
        <div className='hero-content flex-col lg:flex-row'>
          <Image
            src={anime.images.webp.large_image_url}
            className='max-sm:h-48 max:sm:w-32 shadow-2xl border border-violet-400/20'
            alt='hero-image'
            width={200}
            height={250}
          />
          <div className='sm:w-[80%]'>
            <h1 className='text-3xl font-bold max-sm:text-center'>
              {anime.title}
            </h1>
            <p className='py-6 max-sm:hidden'>{anime.synopsis}</p>
            <div className='flex gap-6 absolute bottom-0 right-0'>
              {' '}
              <Link
                className='py-2 px-8 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray-100 hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out'
                href={`/explorer/${anime.mal_id}`}
              >
                See Details
              </Link>
              <Link
                className='py-2 px-8 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray-100 hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out'
                href={anime.trailer.url as string}
              >
                Trailer
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Hero;
