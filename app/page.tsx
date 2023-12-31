import Carousel from './components/Carousel';
import StyledSection from './components/StyledSection';
import TopTenList from './components/TopTenList';
import UpcomingList from './components/UpcomingList';
import PersonalRecomendations from './components/PersonalRecomendations';
import Divider from './components/Divider';
import { getData } from './services/getData';
import { Upcoming } from '@/models/upcoming.model';
import { ActualSeason } from '@/models/emision.model';
import { Top } from '@/models/top_anime.model';

const revalidation = 2592000;

export default async function Home() {
  //todo Passing the url and type fot implement ISR
  const airing = await getData<ActualSeason>(
    'https://api.jikan.moe/v4/top/anime?limit=10&type=tv&filter=airing',
    revalidation
  );
  const top10 = await getData<Top>(
    'https://api.jikan.moe/v4/top/anime?limit=10'
  );
  const upcoming = await getData<Upcoming>(
    'https://api.jikan.moe/v4/top/anime?filter=upcoming',
    revalidation
  );

  //todo pass as prop the results
  return (
    <>
      <StyledSection heading='Current Season.'>
        {/* Hacer una llamada a la APi con un limit de 10 para buscar los
        animes mas populares en emision o sea de la temporada asignarlos a una
        variable el array y pasar como prop cada uno */}
        {airing?.data ? (
          <Carousel animesOnEmision={airing.data} />
        ) : (
          <p>An Error Ocurred</p>
        )}
      </StyledSection>
      <Divider />
      <StyledSection heading='Top 10 Anime.'>
        {/* Hacer la llamada a la api con un limit establecido en 10 al top 10 */}
        {top10?.data ? (
          <TopTenList topAnimes={top10?.data} />
        ) : (
          <p>An Error Ocurred</p>
        )}
      </StyledSection>
      <Divider />
      <StyledSection heading='Upcoming Soon!'>
        {/* Hacer la llamada a los upcoming mas esperados */}
        {upcoming?.data ? (
          <UpcomingList upcomingsAnimes={upcoming?.data} />
        ) : (
          <p>An Error Ocurred</p>
        )}
      </StyledSection>
      <Divider />
      <StyledSection heading='Personal Recomendations.'>
        {/* Esto seguira usando datos mockeados */}
        <PersonalRecomendations />
      </StyledSection>
    </>
  );
}
