/* eslint-disable @next/next/no-img-element */
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import CardWithRank from './CardWithRank';
import { TopAnime } from '@/models/top_anime.model';
import BottomLink from './BottomLink';

type Props = {
  topAnimes: TopAnime[];
};

//Hacer una llama a la api
//buscar el top ranking con un limit en 10

function TopTenList({ topAnimes }: Props) {
  const sortedAnime = topAnimes.sort(
    (anime1, anime2) => anime1.rank - anime2.rank
  );
  return (
    <>
      {' '}
      <ul className='grid lg:grid-cols-2 justify-center items-center gap-5 py-10 px-24 w-full'>
        {sortedAnime.map((anime) => (
          <CardWithRank key={anime.mal_id} anime={anime as TopAnime} />
        ))}
      </ul>
      <BottomLink href='/ranking'>Go to Rank Page</BottomLink>
    </>
  );
}

export default TopTenList;
