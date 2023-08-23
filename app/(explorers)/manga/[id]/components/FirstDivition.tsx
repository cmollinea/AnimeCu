import Label from '../../../components/Label';
import { Info } from '@/models/manga_full_info.model';
import Image from 'next/image';

function FirstDivition({ manga }: { manga: Info }) {
  return (
    <div className='flex flex-col gap-4 text-xs lg:text-sm font-bold w-full text-gray-400 max-lg:col-span-2'>
      <div className='w-full flex flex-col place-content-center max-lg:items-center pb-2'>
        <span className='relative w-[200px] h-[325px] md:w-[300px] md:h-[425px]'>
          <Image
            src={manga.images.webp.large_image_url}
            alt={manga.title_japanese}
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/ahJAAIYALWsWuAbQAAAABJRU5ErkJggg=='
            fill
          />
        </span>
        <ul className='flex gap-2 pt-4 w-fit'>
          {manga.genres.map((genre) => (
            <li
              className=' badge-primary flex items-center text-xs badge-sm rounded-lg font-semibold bg-base-300 text-gray-200'
              key={genre.mal_id}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
      <div className='grid gap-2'>
        <p>
          <Label>Type: </Label>
          {manga.type}
        </p>
        <p>
          <Label>Authors: </Label>
          {manga.authors.map((author) => (
            <span key={author.mal_id}>{author.name}</span>
          ))}
        </p>
        <p>
          <Label>Published: </Label>
          {manga.published.string}
        </p>
        <p>
          <Label>Current Rank: </Label>
          {manga.rank}
        </p>
        <ul className='flex gap-2 flex-wrap'>
          <Label>Demographics: </Label>
          {manga.demographics.map((demographic) => (
            <li
              className=' badge-primary flex items-center text-xs badge-sm rounded-lg font-semibold bg-base-300 text-gray-200'
              key={demographic.mal_id}
            >
              {demographic.name}
            </li>
          ))}
        </ul>
        {manga.chapters && (
          <p>
            <Label>Chapters: </Label>
            {manga.chapters}
          </p>
        )}
        {manga.volumes && (
          <p>
            <Label>Volumes:</Label>
            {manga.volumes}
          </p>
        )}
        <p>
          <Label>Popularity: </Label>
          {manga.popularity}
        </p>
        <p>
          <Label>Status: </Label>
          {manga.status}
        </p>
      </div>
    </div>
  );
}

export default FirstDivition;
