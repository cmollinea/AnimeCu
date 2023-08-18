import Image from 'next/image';
import Stars from './Stars';
import { TopAnime } from '@/types/top10';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';

function CardWithRank({ anime }: { anime: TopAnime }) {
  return (
    <Link
      href={`/anime/${anime.mal_id}`}
      key={anime.mal_id}
      className='card card-side bg-base-100 shadow-x w-full h-[200px] border border-transparent cursor-pointer group hover:border-lime-400/20 transition-all duration-300 ease-in-out'
      title={anime.title}
    >
      <figure className='w-[30%] relative'>
        {' '}
        <Image
          fill
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          className='max-sm:h-48 max:sm:w-32 w-full h-full shadow-2xl border border-gray-100/5 group-hover:scale-110 transition-all duration-300 ease-in-out'
        />
      </figure>

      <div className='card-body w-[70%]'>
        <p className='text-2xl h-fit font-black group-hover:text-lime-400 transition-all duration-300 ease-in-out'>
          {anime.rank}
          {anime.rank === 1
            ? 'st'
            : anime.rank === 2
            ? 'nd'
            : anime.rank === 3
            ? 'rd'
            : 'th'}{' '}
        </p>
        <span className='flex items-center gap-1 text-gray-200'>
          {/* <StarIcon className='fill-lime-400 w-4' />
          {anime.score} */}
          <Stars rating={anime.score} />
        </span>
        <h2 className='text-xl font-bold pb-8 truncate group-hover:text-lime-400 transition-all duration-300 ease-in-out'>
          {anime.title}
        </h2>
        <ul className='flex gap-2 flex-wrap'>
          {anime.genres.map((genre) => (
            <li
              className=' badge-primary flex items-center text-xs badge-sm rounded-lg font-semibold  bg-base-300 text-gray-200'
              key={genre.mal_id}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default CardWithRank;
