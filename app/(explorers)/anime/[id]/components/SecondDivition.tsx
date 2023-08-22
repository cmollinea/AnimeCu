import Divider from '@/app/components/Divider';
import Label from '../../../components/Label';
import { AnimeInfo } from '@/models/anime_full_info.model';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import MainCharacters from './MainCharacters';
import Trailer from './Trailer';

function SecondDivition({
  anime,
  params
}: {
  anime: AnimeInfo;
  params: { id: string };
}) {
  return (
    <div className='font-semibold text-lg col-span-2 text-gray-400'>
      <p className='flex flex-col gap-4 relative max-md:text-sm max-md:text'>
        <Label>Synopsis: </Label>
        <br />
        {anime.synopsis}
      </p>
      {anime.trailer.url ? (
        <div className='flex place-content-center'>
          <Trailer url={anime.trailer.url} />
        </div>
      ) : null}
      <MainCharacters params={params} />
      <Divider />
      <div className='grid gap-10 lg:grid-cols-2 justify-center'>
        <ul className='grid text-xs md:text-sm'>
          <Label>Openings:</Label>{' '}
          {anime.theme?.openings.map((opening) => (
            <li key={opening}>{opening}</li>
          ))}
        </ul>
        <ul className='grid text-xs md:text-sm'>
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
