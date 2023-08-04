import Image from 'next/image';
import Stars from './Stars';
import { TopAnime } from '@/types/top10';
import Link from 'next/link';

function CardWithRank({ anime }: { anime: TopAnime }) {
  return (
    <Link
      href={`/explorer/${anime.mal_id}`}
      key={anime.mal_id}
      className='card card-side bg-base-100 shadow-x w-full h-[200px] border border-transparent cursor-pointer group hover:border-teal-400/20 transition-all duration-300 ease-in-out'
      title={anime.title}
    >
      <figure className='w-[30%]'>
        {' '}
        <Image
          height={300}
          width={300}
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          className='max-sm:h-48 max:sm:w-32 w-full h-full rounded-lg shadow-2xl border border-gray-100/5 group-hover:scale-110 transition-all duration-300 ease-in-out'
        />
      </figure>

      <div className='card-body w-[70%]'>
        <p className='text-2xl h-fit font-black group-hover:text-teal-400 transition-all duration-300 ease-in-out'>
          {anime.rank}
          {anime.rank === 1
            ? 'st'
            : anime.rank === 2
            ? 'nd'
            : anime.rank === 3
            ? 'rd'
            : 'th'}{' '}
        </p>
        <Stars rating={anime.score} />
        <h2 className='text-xl font-bold pb-4 truncate group-hover:text-teal-400 transition-all duration-300 ease-in-out'>
          {anime.title}
        </h2>
        <ul className='flex gap-2 flex-wrap'>
          {anime.genres.map((genre) => (
            <li
              className=' badge-primary badge-lg rounded-lg font-light bg-base-300 text-gray-200'
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
