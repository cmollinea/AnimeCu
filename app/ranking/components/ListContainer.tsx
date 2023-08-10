'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getData } from '@/app/services/getData';
import { Top, TopAnime } from '@/types/top10';
import { useQuery } from 'react-query';
import Link from 'next/link';
import CardWithRank from '@/app/components/CardWithRank';

function ListContainer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = searchParams.get('page') || '1';

  const { data, isLoading, isError, error } = useQuery(
    ['AnimeRanking', page],
    () =>
      getData<Top>('https://api.jikan.moe/v4/top/anime?sfw' + `&page=${page}`),
    { keepPreviousData: true }
  );
  console.log(error, isError, isLoading, data);

  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>Error</p>}
      {data && (
        <>
          {' '}
          <div className='join'>
            <Link href={pathname + '?page=1'} className='join-item btn'>
              «
            </Link>
            <button className='join-item btn'>Page {page}</button>
            <Link href={pathname + '?page=2'} className='join-item btn'>
              »
            </Link>
          </div>
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
