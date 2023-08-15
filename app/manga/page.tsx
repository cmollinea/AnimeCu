import { Metadata } from 'next';
import { getData } from '../services/getData';

type Props = {
  searchParams: {
    page: string;
  };
};

export const metadata: Metadata = {
  title: 'AnimeCU | Manga Explorer',
  description: 'Manga Explorer'
};

async function MangaRoute({ searchParams }: Props) {
  const data = await getData('here goes the url');
  return <div>MangaRoute</div>;
}

export default MangaRoute;
