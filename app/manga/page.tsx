import { Metadata } from 'next';
import { getData } from '../services/getData';
import SearchOptions from './components/SearchOptions';
import StyledSection from '../components/StyledSection';
import MangaContainer from './components/MangaContainer';
import { MangaResponse } from '@/types/mangaResponse';
import Pagination from '../components/Pagination';

type Props = {
  searchParams?: {
    page: string;
    status: string;
    order_by: string;
  };
};

export const metadata: Metadata = {
  title: 'AnimeCU | Manga Explorer',
  description: 'Manga Explorer'
};

async function MangaRoute({ searchParams }: Props) {
  const page = searchParams?.page || '1';
  const status = searchParams?.status || 'publishing';
  const order_by = searchParams?.order_by || 'rank';
  const data = await getData<MangaResponse>(
    `https://api.jikan.moe/v4/manga?sfw&page=${page}&status=${status}&order_by=${order_by}&min_score=6&genres_exclude=4,8,12,49,64`
  );
  console.log(
    `https://api.jikan.moe/v4/manga?sfw&page=${page}&status=${status}&order_by=${order_by}&min_score=6&genres_exclude=4,8,12,49,64`
  );

  return (
    <section className='flex gap-10 relative h-full'>
      <aside className='w-fit px-4 pt-10 sticky top-0'>
        <SearchOptions />
      </aside>
      <StyledSection heading='Manga Explorer'>
        {typeof data !== 'undefined' ? (
          <>
            <Pagination lastPage={data.pagination.last_visible_page} />

            <MangaContainer data={data} />
          </>
        ) : (
          <p>No data</p>
        )}
      </StyledSection>
    </section>
  );
}

export default MangaRoute;
