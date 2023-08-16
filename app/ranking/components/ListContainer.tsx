import { Top, TopAnime } from '@/types/top10';
import CardWithRank from '@/app/components/CardWithRank';
import Pagination from '@/app/components/Pagination';

type Props = {
  data?: Top;
};

function ListContainer({ data }: Props) {
  const lastPage = data?.pagination?.last_visible_page;
  const sortedAnime = data?.data.sort(
    (data1, data2) => data1.rank - data2.rank
  );

  return (
    <>
      {data ? (
        <>
          <Pagination lastPage={lastPage} />
          <ul className='grid lg:grid-cols-2 sm:justify-center sm:items-center gap-20 sm:gap-5 sm:py-10 sm:px-24'>
            {sortedAnime?.map((anime) => (
              <CardWithRank key={anime.mal_id} anime={anime as TopAnime} />
            ))}
          </ul>
        </>
      ) : (
        <p>Error 500</p>
      )}
    </>
  );
}

export default ListContainer;
