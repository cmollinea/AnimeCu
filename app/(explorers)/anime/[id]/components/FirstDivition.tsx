import Label from '../../../components/Label';
import { AnimeInfo } from '@/models/anime_full_info.model';
import Image from 'next/image';

function FirstDivition({ anime }: { anime: AnimeInfo }) {
  return (
    <section className='flex flex-col gap-4 text-xs lg:text-sm font-bold w-full text-gray-400 max-lg:col-span-2'>
      <div className='w-full flex flex-col place-content-center max-lg:items-center pb-2'>
        <span className='relative w-[200px] h-[325px] md:w-[300px] md:h-[425px]'>
          <Image
            src={anime.images.webp.large_image_url}
            alt={anime.title_japanese}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/ahJAAIYALWsWuAbQAAAABJRU5ErkJggg=='
            fill
          />
        </span>
        <ul className='flex gap-2 pt-4 w-fit'>
          {anime.genres.map((genre) => (
            <li
              className=' badge-primary flex items-center text-xs badge-sm rounded-lg font-semibold bg-base-300 text-gray-200'
              key={genre.mal_id}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='max-lg:px-10 grid gap-2'>
        <p>
          <Label>Type: </Label>
          {anime.type}
        </p>
        <p>
          <Label>Source: </Label>
          {anime.source}
        </p>
        <p>
          <Label>Current Rank: </Label>
          {anime.rank}
        </p>
        <p>
          <Label>Popularity: </Label>
          {anime.popularity}
        </p>
        <p>
          <Label>Rating: </Label>
          {anime.rating}
        </p>
        <p>
          <Label>Aired: </Label>
          {anime.aired.string}
        </p>
        <p>
          <Label>Studios: </Label>
          {anime.studios.map((studio) => (
            <span key={studio.mal_id}>{studio.name}</span>
          ))}
        </p>
        <ul className='flex gap-2 flex-wrap'>
          <Label>Producers: </Label>
          <br />
          {anime.producers.map((producer) => (
            <li
              className=' badge-primary flex items-center text-xs badge-sm rounded-lg font-semibold  bg-base-300 text-gray-200'
              key={producer.mal_id}
            >
              {producer.name}
            </li>
          ))}
        </ul>
        <Label>View on: </Label>
        <div className='grid grid-cols-3 gap-4 pt-2 text-'>
          {anime.streaming.map((plataform) => (
            <a
              className='flex gap-2 items-center'
              key={plataform.name}
              target='blank'
              href={plataform.url}
            >
              <Image
                src={
                  plataform.name === 'Crunchyroll'
                    ? '/crunchyroll.svg'
                    : plataform.name === 'Netflix'
                    ? '/netflix.svg'
                    : plataform.name === 'Funimation'
                    ? '/funimation.svg'
                    : ''
                }
                alt={plataform.name}
                height={40}
                width={40}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FirstDivition;
