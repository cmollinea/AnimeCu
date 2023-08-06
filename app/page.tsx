import Carousel from './components/Carousel';
import StyledSection from './components/StyledSection';
import TopTenList from './components/TopTenList';
import UpcomingList from './components/UpcomingList';
import PersonalRecomendations from './components/PersonalRecomendations';
import Divider from './components/Divider';

export default function Home() {
  return (
    <>
      <StyledSection heading='Current Season.'>
        <Carousel />
      </StyledSection>
      <Divider />
      <StyledSection heading='Top 10 Anime.'>
        <TopTenList />
      </StyledSection>
      <Divider />
      <StyledSection heading='Upcoming Soon!'>
        <UpcomingList />
      </StyledSection>
      <Divider />
      <StyledSection heading='Personal Recomendations.'>
        <PersonalRecomendations />
      </StyledSection>
    </>
  );
}
