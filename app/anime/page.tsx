import StyledSection from '@/app/components/StyledSection';
import AnimeFilters from './components/AnimeFIlters';
import { getData } from '../services/getData';
import { AnimeResponse } from '@/types/animeResponse';
import Pagination from '../components/Pagination';
import AnimeContainer from './components/AnimeContainer';

type Props = {
  searchParams?: {
    page: string;
    status: string;
    order_by: string;
    type: string;
    query: string;
  };
};

async function Anime({ searchParams }: Props) {
  const page = searchParams?.page || '1';
  const status = searchParams?.status || 'complete';
  const order_by = searchParams?.order_by || 'rank';
  const type = searchParams?.type || 'tv';
  const query = searchParams?.query || '';

  const URL = `https://api.jikan.moe/v4/anime?sfw&page=${page}&status=${status}&order_by=${order_by}&type=${type}&sort=${
    order_by === 'score' ? 'desc' : 'asc'
  }&q=${query}`;
  console.log(URL);

  const data = await getData<AnimeResponse>(URL);
  return (
    <section className='flex gap-10'>
      <aside className='w-fit px-4 py-8 h-fit sticky top-0'>
        <AnimeFilters />
      </aside>
      <StyledSection heading='Manga Explorer'>
        {data?.data.length === 0 ? (
          <p>No Data</p>
        ) : (
          <>
            {typeof data !== 'undefined' ? (
              <>
                <Pagination lastPage={data.pagination?.last_visible_page} />
                <AnimeContainer data={data} />
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

export default Anime;
