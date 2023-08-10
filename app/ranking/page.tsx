'use client';
import StyledSection from '../components/StyledSection';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Metadata } from 'next';
import ListContainer from './components/ListContainer';

export const metadata: Metadata = {
  title: 'AnimeCU | Ranking',
  description: 'An anime ranking by score'
};

const queryCLient = new QueryClient();

function RankingPage() {
  return (
    <QueryClientProvider client={queryCLient}>
      <StyledSection heading='Anime Ranking'>
        {/* <ul className='grid lg:grid-cols-2 sm:justify-center sm:items-center gap-20 sm:gap-5 sm:py-10 sm:px-24'>
        {top.data.map((anime) => (
          <CardWithRank key={anime.mal_id} anime={anime as TopAnime} />
        ))}
      </ul> */}
        <ListContainer />
      </StyledSection>
    </QueryClientProvider>
  );
}

export default RankingPage;
3;
