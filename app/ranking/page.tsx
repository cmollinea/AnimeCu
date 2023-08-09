import StyledSection from '../components/StyledSection';
import top from '@/app/mocks/top.json';
import { TopAnime } from '@/types/top10';
import CardWithRank from '../components/CardWithRank';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnimeCU | Ranking',
  description: 'An anime ranking by score'
};

async function RankingPage() {
  return (
    <StyledSection heading='Anime Ranking'>
      Here goes a pagination
      <ul className='grid lg:grid-cols-2 sm:justify-center sm:items-center gap-20 sm:gap-5 sm:py-10 sm:px-24'>
        {top.data.map((anime) => (
          <CardWithRank key={anime.mal_id} anime={anime as TopAnime} />
        ))}
      </ul>
      here to
    </StyledSection>
  );
}

export default RankingPage;
3;
