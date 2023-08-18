import { AnimeResponse } from '@/types/animeResponse';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: AnimeResponse;
};

function AnimeContainer({ data }: Props) {
  return (
    <div>
      {data.data.length > 0 ? (
        <ul className='flex flex-wrap gap-10 py-10 px-8'>
          {data.data.map((anime) => (
            <Link
              className='max-w-[150px] border border-transparent group hover:border-lime-400/20 rounded-lg transition-colors duration-300 overflow-hidden'
              href={`/anime/${anime.mal_id}`}
              key={anime.mal_id}
            >
              <div className='relative w-[150px] h-[230px] p-1'>
                <Image
                  className=' group-hover:scale-110 transition-transform duration-300'
                  src={anime.images.webp.large_image_url}
                  fill
                  alt={anime.title_japanese}
                />
              </div>
              <div className='z-10 relative bg-base-100 p-1'>
                {' '}
                <p className='truncate font-bold group-hover:text-lime-400 transition-colors duration-300'>
                  {anime.title_english || anime.title_japanese}
                </p>
                <p className='text-sm opacity-60'>
                  {anime.demographics[0]?.name}
                </p>
                <p className='text-xs opacity-60'>{anime.year}</p>
              </div>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
export default AnimeContainer;
