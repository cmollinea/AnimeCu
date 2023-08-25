import { Metadata } from 'next';
import { getData } from '@/app/services/getData';
import StyledSection from '@/app/components/StyledSection';
import MangaContainer from './components/MangaContainer';
import { MangaResponse } from '@/models/manga_response.model';
import Aside from '../components/Aside';
import NewPagination from '@/app/components/NewPagination';
import FeedbackImage from '@/app/components/FeedBackImage';
import ErrorFeedbackWithRetry from '@/app/components/ErrorFeedbackWithRetry';

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

  const data = await getData<MangaResponse>(URL);

  return (
    <section className='flex gap-10 h-full'>
      <Aside />
      <StyledSection
        heading={typeof data !== 'undefined' ? 'Manga Explorer' : ''}
      >
        {data?.data.length === 0 ? (
          <FeedbackImage source='/nodata.svg' alt='No Data' />
        ) : (
          <>
            {typeof data !== 'undefined' ? (
              <>
                {data.pagination?.has_next_page && (
                  <NewPagination
                    lastPage={data.pagination?.last_visible_page}
                  />
                )}
                <MangaContainer data={data} />
                {data.pagination?.has_next_page && (
                  <NewPagination
                    lastPage={data.pagination?.last_visible_page}
                  />
                )}{' '}
              </>
            ) : (
              <ErrorFeedbackWithRetry />
            )}
          </>
        )}
      </StyledSection>
    </section>
  );
}

export default MangaRoute;
