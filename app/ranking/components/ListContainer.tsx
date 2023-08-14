'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { getData } from '@/app/services/getData';
import { Top, TopAnime } from '@/types/top10';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import CardWithRank from '@/app/components/CardWithRank';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

function ListContainer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = searchParams.get('page') || '1';

  const { data, isLoading, isError, error, isFetching } = useQuery(
    ['AnimeRanking', page],
    () =>
      getData<Top>('https://api.jikan.moe/v4/top/anime?sfw' + `&page=${page}`),
    { keepPreviousData: true }
  );
  console.log(error, isError, isLoading, data);

  const prevPage = () => {
    if (parseInt(page) > 1) {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set('page', (parseInt(page) - 1).toString());
      return newSearchParams.toString();
    }
  };

  const lastPage = data?.pagination.last_visible_page || 2;

  const nextPage = () => {
    if (parseInt(page) < lastPage) {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set('page', (parseInt(page) + 1).toString());
      return newSearchParams.toString();
    }
  };

  return (
    <>
      <div className='join mt-10'>
        <Link
          href={parseInt(page) > 1 ? pathname + '?' + prevPage() : ''}
          className='join-item btn text-gray-400 font-bold'
        >
          <ChevronLeftIcon className='w-4' />
        </Link>
        <button className='join-item btn w-24 text-gray-400 font-bold'>
          {isFetching ? (
            <span className='loading loading-spinner loading-xs'></span>
          ) : (
            `Page ${page}`
          )}
        </button>
        <Link
          href={parseInt(page) < lastPage ? pathname + '?' + nextPage() : ''}
          className='join-item btn text-gray-400 font-bold'
        >
          <ChevronRightIcon className='w-4' />
        </Link>
      </div>
      {isLoading && (
        <span className='loading loading-spinner bg-lime-400 loading-lg mt-10'></span>
      )}
      {isError && <p>Error</p>}
      {data && (
        <>
          {' '}
          <ul className='grid lg:grid-cols-2 sm:justify-center sm:items-center gap-20 sm:gap-5 sm:py-10 sm:px-24'>
            {data.data?.map((anime) => (
              <CardWithRank key={anime.mal_id} anime={anime as TopAnime} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ListContainer;

// useEffect(() => {
//   console.log('aaaa');
//   const getTopAnimes = async () => {
//     const data = await getData<Top>(
//       'https://api.jikan.moe/v4/top/anime?sfw' + `&page=${page}`
//     );
//     if (data) {
//       setAnimesData(data);
//       return;
//     }
//   };
//   getTopAnimes();
// }, [page]);
