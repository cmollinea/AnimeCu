import Label from '@/app/components/Label';
import { AnimeInfo } from '@/types/animeInfo';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

function FirstDivition({ anime }: { anime: AnimeInfo }) {
  return (
    <div className='flex flex-col gap-4 text-sm font-bold w-fit'>
      <Image
        src={anime.images.webp.large_image_url}
        alt={anime.title_japanese}
        width={300}
        height={400}
      />
      <p>
        <Label>Type: </Label>
        {anime.type}
      </p>
      <p>
        <Label>Source: </Label>
        {anime.source}
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
      <p>
        <Label>Current Rank: </Label>
        {anime.rank}
      </p>
      <ul className='flex gap-2 flex-wrap'>
        <Label>Genres: </Label> <br />
        {anime.genres.map((genre) => (
          <li
            className=' badge-primary badge-lg rounded-lg font-light bg-base-300 text-gray-200'
            key={genre.mal_id}
          >
            {genre.name}
          </li>
        ))}
      </ul>
      <ul className='flex gap-2 flex-wrap'>
        <Label>Producers: </Label>
        <br />
        {anime.producers.map((producer) => (
          <li
            className=' badge-primary badge-lg rounded-lg font-light bg-base-300 text-gray-200'
            key={producer.mal_id}
          >
            {producer.name}
          </li>
        ))}
      </ul>
      <p>
        <Label>Year: </Label>
        {anime.year}
      </p>
      <p>
        <Label>Popularity: </Label>
        {anime.popularity}
      </p>
      <div className='flex gap-2'>
        <Label>Streaming: </Label>
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
              height={20}
              width={20}
            />
            {plataform.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FirstDivition;
