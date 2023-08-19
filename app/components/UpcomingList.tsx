import Link from 'next/link';
import BasicCard from './BasicCard';
import upcoming from '../mocks/upcoming.json';
import { UpcomingAnime } from '@/models/upcoming.model';
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';

type Props = {
  upcomingsAnimes: UpcomingAnime[];
};

//Hacer llamada a la api
//traer los proximos estrenaos mas
// esperados

function UpcomingList({ upcomingsAnimes }: Props) {
  return (
    <>
      <ul className='flex flex-wrap p-10 gap-6 justify-center'>
        {upcomingsAnimes.map((anime) => (
          <BasicCard key={anime.mal_id} anime={anime as UpcomingAnime} />
        ))}
      </ul>
      <Link
        className='hover:text-lime-400/80 group text-gray-100 transition-all duration-300 ease-in-out font-black absolutes flex items-center absolute -bottom-6 right-6'
        href={'/anime'}
      >
        Go to Explorer
        <ChevronDoubleRightIcon className='w-5 mt-1 group-hover:translate-x-2 transition-all duration-300 ease-in-out' />
      </Link>
    </>
  );
}

export default UpcomingList;
