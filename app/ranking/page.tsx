import StyledSection from '../components/StyledSection';
import { Metadata } from 'next';
import ListContainer from './components/ListContainer';
import { getData } from '../services/getData';
import { Top } from '@/models/top_anime.model';

type Props = {
  searchParams: {
    page: string;
  };
};

export const metadata: Metadata = {
  title: 'AnimeCU | Ranking',
  description: 'An anime ranking by score'
};

async function RankingPage({ searchParams }: Props) {
  const page = searchParams.page ? searchParams.page : '1';
  const data = await getData<Top>(
    `https://api.jikan.moe/v4/top/anime?limit=20&page=${page}`
  );
  return (
    <StyledSection heading='Anime Ranking'>
      <ListContainer data={data} />
    </StyledSection>
  );
}

export default RankingPage;
3;
