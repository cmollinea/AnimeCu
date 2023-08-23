import BasicCard from '@/app/components/BasicCard';
import { MangaResponse } from '@/models/manga_response.model';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: MangaResponse;
};

function MangaContainer({ data }: Props) {
  return (
    <div>
      {data.data.length > 0 ? (
        <ul className='flex flex-wrap gap-10 py-10 md:px-8 place-content-center'>
          {data.data.map((manga) => (
            <BasicCard
              key={manga.mal_id}
              info={{
                title: manga.title,
                id: manga.mal_id,
                japaneseTitle: manga.title_japanese,
                image: manga.images.webp.large_image_url,
                dataType: 'manga',
                year: manga.published.prop.from.year as number,
                author: manga.authors[0].name
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
export default MangaContainer;
