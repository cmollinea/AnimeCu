import StyledSection from '../components/StyledSection';
import { Metadata } from 'next';
import ListContainer from './components/ListContainer';
import { getData } from '../services/getData';
import { Top } from '@/types/top10';

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
  const data = await getData<Top>('Here goes the url');
  return (
    <StyledSection heading='Anime Ranking'>
      <ListContainer data={data} />
    </StyledSection>
  );
}

export default RankingPage;
3;
