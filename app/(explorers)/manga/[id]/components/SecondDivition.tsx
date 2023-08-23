import Divider from '@/app/components/Divider';
import Label from '../../../components/Label';
import MainCharacters from './MainCharacters';
import { Info } from '@/models/manga_full_info.model';

function SecondDivition({
  manga,
  params
}: {
  manga: Info;
  params: { id: string };
}) {
  return (
    <div className='font-semibold text-lg max-md:text-sm col-span-2 text-gray-400'>
      <p className='flex flex-col gap-4 relative '>
        <Label>Synopsis: </Label>
        <br />
        {manga.synopsis}
      </p>
      <p className='text-sm max-md:text-xs flex flex-col gap-2 pt-8'>
        <Label>Background: </Label>
        <br />
        <i> {manga.background}</i>
      </p>
      <MainCharacters params={params} />
    </div>
  );
}

export default SecondDivition;
