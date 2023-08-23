import BasicCard from '@/app/components/BasicCard';
import { AnimeResponse } from '@/models/anime_response.model';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: AnimeResponse;
};

function AnimeContainer({ data }: Props) {
  return (
    <div>
      {data.data.length > 0 ? (
        <ul className='flex flex-wrap gap-10 py-10 md:px-8  place-content-center'>
          {data.data.map((anime) => (
            <BasicCard
              key={anime.mal_id}
              info={{
                title: anime.title,
                id: anime.mal_id,
                japaneseTitle: anime.title_japanese,
                image: anime.images.webp.large_image_url,
                dataType: 'anime',
                year: anime.aired.prop.from.year,
                rating: anime.rating
              }}
            />
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
export default AnimeContainer;
