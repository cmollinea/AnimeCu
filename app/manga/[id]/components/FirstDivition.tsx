import Label from '@/app/components/Label';
import { Info } from '@/types/mangaFullInfo';
import Image from 'next/image';

function FirstDivition({ manga }: { manga: Info }) {
  return (
    <div className='flex flex-col gap-4 text-sm font-bold w-full text-gray-400'>
      <Image
        src={manga.images.webp.large_image_url}
        alt={manga.title_japanese}
        width={300}
        height={400}
      />
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
        <Label>Genres: </Label> <br />
        {manga.genres.map((genre) => (
          <li
            className=' badge-primary badge-lg rounded-lg font-light bg-base-300 text-gray-200'
            key={genre.mal_id}
          >
            {genre.name}
          </li>
        ))}
      </ul>
      <ul className='flex gap-2 flex-wrap'>
        <Label>Demographics: </Label>
        {manga.demographics.map((demographic) => (
          <li
            className=' badge-primary badge-lg rounded-lg font-light bg-base-300 text-gray-200'
            key={demographic.mal_id}
          >
            {demographic.name}
          </li>
        ))}
      </ul>
      <p>
        <Label>Chapters: </Label>
        {manga.chapters}
      </p>
      <p>
        <Label>Volumes:</Label>
        {manga.volumes}
      </p>
      <p>
        <Label>Popularity: </Label>
        {manga.popularity}
      </p>
      <p>
        <Label>Status: </Label>
        {manga.status}
      </p>
    </div>
  );
}

export default FirstDivition;
