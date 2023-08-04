import Carousel from './components/Carousel';
import HomeSection from './components/HomeSection';
import TopTenList from './components/TopTenList';
import UpcomingList from './components/UpcomingList';
import PersonalRecomendations from './components/PersonalRecomendations';
import Divider from './components/Divider';

export default function Home() {
  return (
    <>
      <HomeSection heading='Current Season.'>
        <Carousel />
      </HomeSection>
      <Divider />
      <HomeSection heading='Top 10 Anime.'>
        <TopTenList />
      </HomeSection>
      <Divider />
      <HomeSection heading='Upcoming Soon!'>
        <UpcomingList />
      </HomeSection>
      <Divider />
      <HomeSection heading='Personal Recomendations.'>
        <PersonalRecomendations />
      </HomeSection>
    </>
  );
}
