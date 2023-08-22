import StyledSection from '@/app/components/StyledSection';
import { getData } from '@/app/services/getData';
import { AnimeResponse } from '@/models/anime_response.model';
import AnimeContainer from './components/AnimeContainer';
import Aside from '../components/Aside';
import NewPagination from '@/app/components/NewPagination';

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
  const order_by = searchParams?.order_by || 'mal_id';
  const type = searchParams?.type || 'tv';
  const query = searchParams?.query || '';

  const URL = `https://api.jikan.moe/v4/anime?sfw&page=${page}&status=${status}&order_by=${order_by}&type=${type}&sort=${
    order_by === 'score' ? 'desc' : 'asc'
  }&q=${query}`;
  console.log(URL);

  const data = await getData<AnimeResponse>(URL);
  return (
    <section className='flex gap-10'>
      <Aside />
      <StyledSection heading='Anime Explorer'>
        {data?.data.length === 0 ? (
          <p>There is nothing for you</p>
        ) : (
          <>
            {typeof data !== 'undefined' ? (
              <>
                {data.pagination?.has_next_page && (
                  <NewPagination
                    lastPage={data.pagination?.last_visible_page}
                  />
                )}{' '}
                <AnimeContainer data={data} />
                {data.pagination?.has_next_page && (
                  <NewPagination
                    lastPage={data.pagination?.last_visible_page}
                  />
                )}{' '}
              </>
            ) : (
              <p>An unknown error ocurred</p>
            )}
          </>
        )}
      </StyledSection>
    </section>
  );
}

export default Anime;
