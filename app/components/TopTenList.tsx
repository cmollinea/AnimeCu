/* eslint-disable @next/next/no-img-element */
import top from '@/app/mocks/top.json';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import CardWithRank from './CardWithRank';
import { TopAnime } from '@/types/top10';

//Hacer una llama a la api
//buscar el top ranking con un limit en 10

function TopTenList() {
  return (
    <>
      {' '}
      <ul className='grid lg:grid-cols-2 justify-center items-center gap-5 py-10 px-24 mx-auto'>
        {top.data.map((anime) => (
          <CardWithRank key={anime.mal_id} anime={anime as TopAnime} />
        ))}
      </ul>
      <Link
        className='hover:text-teal-400/80 group text-gray-100 transition-all duration-300 ease-in-out font-black absolutes flex items-center absolute -bottom-8 right-6'
        href={'/ranking'}
      >
        Go to Rank Page
        <ChevronDoubleRightIcon className='w-5 mt-1 group-hover:translate-x-2 transition-all duration-300 ease-in-out' />
      </Link>
    </>
  );
}

export default TopTenList;
