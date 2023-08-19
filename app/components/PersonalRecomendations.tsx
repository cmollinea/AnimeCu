import OneAnime from '@/app/mocks/OneAnimeInfo.json';
import ousama from '@/app/mocks/ousama.json';
import cyberpunk from '@/app/mocks/cyberpunk.json';
import ngnl from '@/app/mocks/ngnl.json';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const recomendations = [ousama.data, cyberpunk.data, ngnl.data];

// Para este componente supongo que voy a crera un array por mi mismo
// con datos de 3 animes dos series y una peli y proceder normalmente

function PersonalRecomendations() {
  return (
    <ul className='grid grid-cols-3 justify-center mx-auto max-lg:grid-cols-1 px-20 py-16 gap-20'>
      {recomendations.map((anime, index) => (
        <li key={index} className='flex flex-col w-fit h-full'>
          <figure className='relative w-72 h-96'>
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title_japanese}
              fill
            />
          </figure>

          <h1 className='text-xl py-4 font-black'>{anime.title}</h1>
          <div className='flex justify-between'>
            <Link
              className='py-2 px-8 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray-100 hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out'
              href={`/anime/${anime.mal_id}`}
            >
              See Details
            </Link>
            <Link
              className='py-2 px-8 flex items-center gap-0.5 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray-100 hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out group'
              href={anime.trailer.url as string}
            >
              Trailer
              <ArrowUpRightIcon className='w-3 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5' />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PersonalRecomendations;
