import Divider from '@/app/components/Divider';
import Label from '@/app/components/Label';
import { AnimeInfo } from '@/types/animeInfo';
import { StarIcon } from '@heroicons/react/24/solid';

function SecondDivition({ anime }: { anime: AnimeInfo }) {
  return (
    <div className='font-semibold text-lg col-span-2'>
      <div className='w-full flex justify-center items-center pb-10 text-3xl font-bold gap-10'>
        {' '}
        <h1 className=' text-teal-400 flex'>
          {anime.title}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          {anime.title_japanese}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          <span className='flex items-center gap-1 text-gray-200'>
            <StarIcon className='fill-teal-400 w-8' />
            {anime.score}
          </span>
        </h1>
      </div>
      <p>
        <Label>Synopsis: </Label>
        <br />
        {anime.synopsis}
      </p>
      <Divider />
      {/* Crear aqui un tabla para opening y endings */}
      <div className='grid grid-cols-2 justify-around'>
        <ul className='grid text-sm'>
          <Label>Openings</Label>{' '}
          {anime.theme.openings.map((opening) => (
            <li key={opening}>{opening}</li>
          ))}
        </ul>
        <ul className='grid text-sm'>
          <Label>Endings:</Label>
          {anime.theme.endings.map((ending) => (
            <li key={ending}>{ending}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SecondDivition;
