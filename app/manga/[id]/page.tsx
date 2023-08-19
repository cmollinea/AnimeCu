import { Metadata } from 'next';
import FirstDivition from './components/FirstDivition';
import SecondDivition from './components/SecondDivition';
import { StarIcon } from '@heroicons/react/24/solid';
import { getData } from '@/app/services/getData';
import { MangaInfo } from '@/models/manga_full_info.model';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getData<MangaInfo>(
    `https://api.jikan.moe/v4/manga/${params.id}/full`
  );
  return {
    title: `AnimeCu | ${data?.data.title || 'Error'}`
  };
}

async function AnimeInfo({ params }: Props) {
  const data = await getData<MangaInfo>(
    `https://api.jikan.moe/v4/manga/${params.id}/full`
  );
  const manga = data?.data;

  return (
    <>
      <div className='lg:w-full flex justify-center items-center py-10 text-xl lg:text-3xl font-bold gap-10 text-gray-400/'>
        <h1 className=' text-lime-400 flex flex-wrap'>
          {manga?.title}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          {manga?.title_japanese}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          <span className='flex items-center gap-1 text-gray-300'>
            {manga?.score}
            <StarIcon className='fill-lime-400 w-8' />
          </span>
        </h1>
      </div>
      <section className='grid lg:grid-cols-3 max-lg:items-center max-lg:gap-10 max-lg:px-8 max-lg:justify-center px-16 pb-10'>
        {manga && (
          <>
            {' '}
            <FirstDivition manga={manga} />
            <SecondDivition manga={manga} params={params} />
          </>
        )}
      </section>
    </>
  );
}

export default AnimeInfo;
