import React from 'react';
import { UpcomingAnime } from '@/types/upcoming';
import Image from 'next/image';
import Link from 'next/link';

function BasicCard({ anime }: { anime: UpcomingAnime }) {
  return (
    <Link
      key={anime.mal_id}
      className='bg-base-100 p-2 rounded-lg border border-transparent shadow-x w-40 h-fit cursor-pointer group hover:border-lime-400/20 overflow-hidden transition-all duration-300 ease-in-out'
      title={anime.title}
      href={`/anime/${anime.mal_id}`}
    >
      <div>
        {' '}
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          height={300}
          width={300}
          className='h-56 w-40 rounded-lg shadow-2xl border border-gray-100/5 group-hover:scale-110 transition-all duration-300 ease-in-out'
        />
        <h2 className='w-full text-center font-bold truncate group-hover:text-lime-400 transition-all duration-300 ease-in-out py-4'>
          {anime.title}
        </h2>
      </div>
    </Link>
  );
}

export default BasicCard;
