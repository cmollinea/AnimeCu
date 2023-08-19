import { AnimeOnEmision } from '@/models/emision.model';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'animate.css';

type Props = {
  anime: AnimeOnEmision;
};

function Hero({ anime }: Props) {
  return (
    <div className='hero max-sm:place-items-start max-sm:pt-4 animate__animated animate__fadeIn animate__slow h-[550px] sm:h-[400px] mx-auto relative overflow-hidden transition-all duration-300 ease-in-out'>
      {anime ? (
        <div className='hero-content max-sm:justify-start flex-col lg:flex-row sm:gap-10'>
          <div className='relative h-[350px] sm:h-72 w-[250px] sm:w-56'>
            {' '}
            <Image
              src={anime.images.webp.large_image_url}
              className='max-sm:h-48 max:sm:w-32 shadow-2xl border border-violet-400/20'
              alt='hero-image'
              // width={200}
              // height={250}
              fill
            />
          </div>
          <div className='sm:w-[80%]'>
            <h1 className='text-xl max-sm:mt-2 sm:text-3xl font-bold max-sm:text-center'>
              {anime.title}
            </h1>
            <p className='py-6 max-sm:hidden'>{anime.synopsis}</p>
            <div className='flex gap-6 sm:absolute sm:bottom-0 sm:right-0 max-sm:w-full max-ms:items-center place-content-center max-sm:mt-2'>
              {' '}
              <Link
                className='max-sm:p-2 max-sm:mt-4 sm:py-2  sm:px-8 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50 text-gray-100 hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out'
                href={`/anime/${anime.mal_id}`}
              >
                See Details
              </Link>
              <Link
                className='max-sm:p-2 max-sm:mt-4 sm:py-2 sm:px-8 flex items-center gap-0.5 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray-100 hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out group'
                href={anime.trailer.url as string}
              >
                Trailer
                <ArrowUpRightIcon className='w-4 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5' />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Hero;
