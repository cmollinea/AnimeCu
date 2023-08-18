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
    type: string;
    query: string;
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
  const type = searchParams?.type || 'manga';
  const query = searchParams?.query || '';

  const URL = `https://api.jikan.moe/v4/manga?sfw&page=${page}&status=${status}&order_by=${order_by}&type=${type}&min_score=4&genres_exclude=4,8,12,49,64&sort=${
    order_by === 'score' ? 'desc' : 'asc'
  }&q=${query}`;
  console.log(URL);

  const data = await getData<MangaResponse>(URL);

  return (
    <section className='flex gap-10 h-full'>
      <aside className='w-fit px-4 py-8 h-fit sticky top-0'>
        <SearchOptions />
      </aside>
      <StyledSection heading='Manga Explorer'>
        {data?.data.length === 0 ? (
          <p>No Data</p>
        ) : (
          <>
            {typeof data !== 'undefined' ? (
              <>
                <Pagination lastPage={data.pagination?.last_visible_page} />
                <MangaContainer data={data} />
                <Pagination lastPage={data.pagination?.last_visible_page} />
              </>
            ) : (
              <p>No data</p>
            )}
          </>
        )}
      </StyledSection>
    </section>
  );
}

export default MangaRoute;
