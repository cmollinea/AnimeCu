import OneAnimeInfo from '@/app/mocks/OneAnimeInfo.json';
import { Metadata } from 'next';
import FirstDivition from './components/FirstDivition';
import { AnimeInfo } from '@/types/animeInfo';
import SecondDivition from './components/SecondDivition';
import { StarIcon } from '@heroicons/react/20/solid';

export const metadata: Metadata = {
  title: `AnimeCU | ${OneAnimeInfo.data.title} `
};

// Aqui debo hacer un fetch a la api
// buscando la full info del anime
// debo declarar async el componente
// y usar el param (id) para el fetch

function AnimeInfo({ params }: { params: { id: string } }) {
  return (
    <>
      <div className='w-full flex justify-center items-center py-10 text-3xl font-bold gap-10'>
        {' '}
        <h1 className=' text-teal-400 flex'>
          {OneAnimeInfo.data.title}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          {OneAnimeInfo.data.title_japanese}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          <span className='flex items-center gap-1 text-gray-200'>
            <StarIcon className='fill-teal-400 w-8' />
            {OneAnimeInfo.data.score}
          </span>
        </h1>
      </div>
      <section className='grid grid-cols-3 px-20'>
        <FirstDivition anime={OneAnimeInfo.data as AnimeInfo} />
        <SecondDivition anime={OneAnimeInfo.data as AnimeInfo} />
      </section>
    </>
  );
}

export default AnimeInfo;
