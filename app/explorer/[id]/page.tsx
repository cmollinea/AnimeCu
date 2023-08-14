import { Metadata } from 'next';
import FirstDivition from './components/FirstDivition';
import { AnimeInfo } from '@/types/animeInfo';
import SecondDivition from './components/SecondDivition';
import { StarIcon } from '@heroicons/react/24/solid';
import Divider from '@/app/components/Divider';
import MainCharacters from './components/MainCharacters';
import DropDown from './components/DropDown';
import { getAnimeFullInfo } from './services/getAnimeFullInfo';
import Label from '@/app/components/Label';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getAnimeFullInfo(params.id);
  return {
    title: `AnimeCu | ${data?.data.title}`
  };
}

async function AnimeInfo({ params }: Props) {
  const data = await getAnimeFullInfo(params.id);
  const anime = data?.data;

  return (
    <>
      <div className='lg:w-full flex justify-center items-center py-10 text-xl lg:text-3xl font-bold gap-10 text-gray-400/'>
        <h1 className=' text-lime-400 flex flex-wrap'>
          {anime?.title}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          {anime?.title_japanese}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          <span className='flex items-center gap-1 text-gray-300'>
            {anime?.score}
            <StarIcon className='fill-lime-400 w-8' />
          </span>
        </h1>
      </div>
      <section className='grid lg:grid-cols-3 max-lg:items-center max-lg:gap-10 max-lg:px-8 max-lg:justify-center px-16 pb-10'>
        {anime && (
          <>
            {' '}
            <FirstDivition anime={anime as AnimeInfo} />
            <SecondDivition anime={anime as AnimeInfo} params={params} />
          </>
        )}
      </section>
      <Divider />
      <DropDown />
    </>
  );
}

export default AnimeInfo;
