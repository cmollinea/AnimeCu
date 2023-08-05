import OneAnimeInfo from '@/app/mocks/OneAnimeInfo.json';
import { Metadata } from 'next';
import FirstDivition from './components/FirstDivition';
import { AnimeInfo } from '@/types/animeInfo';
import SecondDivition from './components/SecondDivition';
import { StarIcon } from '@heroicons/react/24/solid';
import Divider from '@/app/components/Divider';
import MainCharacters from './components/MainCharacters';
import DropDown from './components/DropDown';

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
      <div className='lg:w-full flex justify-center items-center py-10 text-xl lg:text-3xl font-bold gap-10'>
        <h1 className=' text-teal-400 flex flex-wrap'>
          {OneAnimeInfo.data.title}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          {OneAnimeInfo.data.title_japanese}
          <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
          <span className='flex items-center gap-1 text-gray-200'>
            {OneAnimeInfo.data.score}
            <StarIcon className='fill-teal-400 w-8' />
          </span>
        </h1>
      </div>
      <section className='grid lg:grid-cols-3 max-lg:items-center max-lg:gap-10 max-lg:px-16 max-lg:justify-center px-16 pb-10'>
        <FirstDivition anime={OneAnimeInfo.data as AnimeInfo} />
        <SecondDivition anime={OneAnimeInfo.data as AnimeInfo} />
      </section>
      <Divider />
      {/* Cambiar luego el nombre de este componente debido a que abarca los
      Personajes pero tambien los Siyuus */}
      <MainCharacters />
      <Divider />
      <DropDown />
    </>
  );
}

export default AnimeInfo;
