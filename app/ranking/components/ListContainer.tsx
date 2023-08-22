import { Top, TopAnime } from '@/models/top_anime.model';
import CardWithRank from '@/app/components/CardWithRank';
import NewPagination from '@/app/components/NewPagination';

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
          <NewPagination lastPage={lastPage} />
          <ul className='grid lg:grid-cols-2 sm:justify-center sm:items-center gap-5 md:gap-10 py-10 sm:px-24'>
            {sortedAnime?.map((anime) => (
              <CardWithRank key={anime.mal_id} anime={anime as TopAnime} />
            ))}
          </ul>
          <NewPagination lastPage={lastPage} />
        </>
      ) : (
        <p>Error 500</p>
      )}
    </>
  );
}

export default ListContainer;
