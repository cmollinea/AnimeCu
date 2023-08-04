import Divider from '@/app/components/Divider';
import Label from '@/app/components/Label';
import { AnimeInfo } from '@/types/animeInfo';

function SecondDivition({ anime }: { anime: AnimeInfo }) {
  return (
    <div className='font-semibold text-lg col-span-2'>
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
