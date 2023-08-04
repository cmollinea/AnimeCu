import Label from '@/app/components/Label';
import { AnimeInfo } from '@/types/animeInfo';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

function FirstDivition({ anime }: { anime: AnimeInfo }) {
  return (
    <div className='flex flex-col gap-4 font-bold'>
      <Image
        src={anime.images.webp.large_image_url}
        alt={anime.title_japanese}
        width={300}
        height={400}
      />
      <p>
        <Label>Rating: </Label>
        {anime.rating}
      </p>
      <p>
        <Label>Current Rank: </Label> {anime.rank}
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
      <p>
        <Label>Year: </Label> {anime.year}
      </p>
      <p>
        <Label>Popularity: </Label> {anime.popularity}
      </p>
      <div className='flex flex-wrap gap-2'>
        <Label>External Links: </Label>
        <br />
        {anime.external.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target='blank'
            className='hover:text-teal-400 transition-colors duration-300 ease-in-out'
          >
            {item.name}
          </a>
        ))}
      </div>
      <ul className='flex gap-2 flex-wrap'>
        <Label>Producers: </Label>
        <br />
        {anime.producers.map((producer) => (
          <span
            className=' badge-primary badge-lg rounded-lg font-light bg-base-300 text-gray-200'
            key={producer.mal_id}
          >
            {producer.name}
          </span>
        ))}
      </ul>
    </div>
  );
}

export default FirstDivition;
