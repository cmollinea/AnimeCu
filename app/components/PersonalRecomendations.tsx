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
    <ul className='grid grid-cols-3 justify-center mx-auto max-md:grid-cols-1 lg:px-20 py-16 gap-20 text-center'>
      {recomendations.map((anime, index) => (
        <li key={index} className='flex flex-col w-fit h-full'>
          <figure className='relative w-56 h-72 lg:w-72 lg:h-96'>
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title_japanese}
              fill
            />
          </figure>

          <h1 className='text-xl py-4 font-bold'>{anime.title}</h1>
          <div className='flex justify-between'>
            <Link
              className='py-1 lg:py-2 px-2 lg:px-6 flex items-center font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray- hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out'
              href={`/anime/${anime.mal_id}`}
            >
              See Details
            </Link>
            <Link
              className='py-2 lg:py-2 px-6 lg:px-10 flex items-center gap-0.5 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray- hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out group'
              href={anime.trailer.url as string}
            >
              Trailer
              <ArrowUpRightIcon className='w-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-0.5' />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PersonalRecomendations;
