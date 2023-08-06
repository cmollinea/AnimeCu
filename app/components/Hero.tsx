import { AnimeOnEmision } from '@/types/emision';
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  anime: AnimeOnEmision;
};

function Hero({ anime }: Props) {
  return (
    <div className='hero fade-in opacity-0 h-[400px] py-6 mx-auto relative overflow-hidden transition-all duration-300 ease-in-out'>
      <div className='hero-content flex-col lg:flex-row'>
        <Image
          src={anime?.images.webp.large_image_url}
          className='max-sm:h-48 max:sm:w-32 rounded-lg shadow-2xl border border-violet-400/20'
          alt='hero-image'
          width={300}
          height={300}
        />
        <div className='sm:w-[80%]'>
          <h1 className='text-3xl font-bold max-sm:text-center'>
            {anime?.title}
          </h1>
          <p className='py-6 max-sm:hidden'>{anime?.synopsis}</p>
          <Link
            className='hover:text-teal-400/80 group text-gray-100 transition-all duration-300 ease-in-out font-black absolutes flex items-center absolute bottom-0 right-6'
            href={''}
          >
            More Details
            <ChevronDoubleRightIcon className='w-5 mt-1 group-hover:translate-x-2 transition-all duration-300 ease-in-out' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
