'use client';

import CardWithRank from '@/app/components/CardWithRank';
import { getData } from '@/app/services/getData';
import { Top, TopAnime } from '@/types/top10';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function ListContainer() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const [animesData, setAnimesData] = useState<Top>({} as Top);

  //!Usar luego React-Query o SWR

  useEffect(() => {
    const getTopAnimes = async () => {
      const data = await getData<Top>('holaaa');
      if (data) {
        setAnimesData(data);
      } else {
        setAnimesData({} as Top);
      }
    };

    getTopAnimes();
  }, [animesData]);

  return (
    <>
      {animesData ? (
        <ul className='grid lg:grid-cols-2 sm:justify-center sm:items-center gap-20 sm:gap-5 sm:py-10 sm:px-24'>
          {animesData.data.map((anime) => (
            <CardWithRank key={anime.mal_id} anime={anime as TopAnime} />
          ))}
        </ul>
      ) : (
        <p>No data to show</p>
      )}
    </>
  );
}

export default ListContainer;
