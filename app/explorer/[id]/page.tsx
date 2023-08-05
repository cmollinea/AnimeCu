import OneAnimeInfo from '@/app/mocks/OneAnimeInfo.json';
import { Metadata } from 'next';
import FirstDivition from './components/FirstDivition';
import { AnimeInfo } from '@/types/animeInfo';
import SecondDivition from './components/SecondDivition';

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
      <section className='grid grid-cols-3 p-20'>
        <FirstDivition anime={OneAnimeInfo.data as AnimeInfo} />
        <SecondDivition anime={OneAnimeInfo.data as AnimeInfo} />
      </section>
    </>
  );
}

export default AnimeInfo;
