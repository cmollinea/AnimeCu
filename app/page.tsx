import Carousel from './components/Carousel';
import HomeSection from './components/HomeSection';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import TopTenList from './components/TopTenList';
import UpcomingList from './components/UpcomingList';

export default function Home() {
  return (
    <>
      <HomeSection heading='Current Season.'>
        <Carousel />
      </HomeSection>
      <div className='divider after:bg-base-300/50 before:bg-base-300/50 mt-16'>
        <ChevronDownIcon className='w-16 text-base-300/50' />
      </div>
      <HomeSection heading='Top 10 Anime.'>
        <TopTenList />
      </HomeSection>
      <div className='divider after:bg-base-300/50 before:bg-base-300/50 mt-16'>
        <ChevronDownIcon className='w-16 text-base-300/50' />
      </div>
      <HomeSection heading='Upcoming Soon!'>
        <UpcomingList />
      </HomeSection>
      <div className='divider after:bg-base-300/50 before:bg-base-300/50 mt-16'>
        <ChevronDownIcon className='w-16 text-base-300/50' />
      </div>
      <HomeSection heading='Personal Recomendations.'>
        Personal Recomendations
      </HomeSection>
    </>
  );
}
