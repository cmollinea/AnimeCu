import Divider from '@/app/components/Divider';
import Label from '@/app/components/Label';
import { AnimeInfo } from '@/types/animeInfo';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import MainCharacters from './MainCharacters';

function SecondDivition({
  anime,
  params
}: {
  anime: AnimeInfo;
  params: { id: string };
}) {
  return (
    <div className='font-semibold text-lg col-span-2 text-gray-400'>
      <p className='flex flex-col gap-4 relative'>
        <Label>Synopsis: </Label>
        <br />
        {anime.synopsis}
      </p>
      {anime.trailer.url ? (
        <a
          className='flex max-sm:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-lime-400 transition-all group mt-4 w-fit'
          target='_blank'
          href={anime.trailer.url}
        >
          Trailer{' '}
          <ArrowUpRightIcon className='w-3 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-all duration-300 ease-in-out' />
        </a>
      ) : null}
      <MainCharacters params={params} />
      <Divider />
      <div className='grid gap-10 lg:grid-cols-2 justify-center'>
        <ul className='grid text-sm'>
          <Label>Openings:</Label>{' '}
          {anime.theme?.openings.map((opening) => (
            <li key={opening}>{opening}</li>
          ))}
        </ul>
        <ul className='grid text-sm'>
          <Label>Endings:</Label>
          {anime.theme?.endings.map((ending) => (
            <li key={ending}>{ending}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SecondDivition;
