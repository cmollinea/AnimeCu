import Link from 'next/link';
import BasicCard from './BasicCard';
import { UpcomingAnime } from '@/models/upcoming.model';
import { ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import BottomLink from './BottomLink';

type Props = {
  upcomingsAnimes: UpcomingAnime[];
};

//Hacer llamada a la api
//traer los proximos estrenaos mas
// esperados

function UpcomingList({ upcomingsAnimes }: Props) {
  return (
    <>
      <ul className='flex flex-wrap lg:p-10 max-lg:pt-6 gap-6 justify-center max-md:pb-6'>
        {upcomingsAnimes.map((anime) => (
          <BasicCard key={anime.mal_id} anime={anime as UpcomingAnime} />
        ))}
      </ul>
      <BottomLink href='/anime'>Go to Anime Explorer</BottomLink>
    </>
  );
}

export default UpcomingList;
