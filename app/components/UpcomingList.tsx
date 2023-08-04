/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import BasicCard from './BasicCard';
import upcoming from '../mocks/upcoming.json';
import { UpcomingAnime } from '@/types/upcoming';
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';

function UpcomingList() {
  return (
    <>
      <ul className='flex flex-wrap p-10 gap-6 justify-center'>
        {upcoming.data.map((anime) => (
          <BasicCard key={anime.mal_id} anime={anime as UpcomingAnime} />
        ))}
      </ul>
      <Link
        className='hover:text-teal-400/80 group text-gray-100 transition-all duration-300 ease-in-out font-black absolutes flex items-center absolute -bottom-8 right-6'
        href={'/explorer'}
      >
        Go to Explorer
        <ChevronDoubleRightIcon className='w-5 mt-1 group-hover:translate-x-2 transition-all duration-300 ease-in-out' />
      </Link>
    </>
  );
}

export default UpcomingList;
