import OneAnime from '@/app/mocks/OneAnimeInfo.json';
import Image from 'next/image';
import Link from 'next/link';

const recomendations = [OneAnime.data, OneAnime.data, OneAnime.data];

// Para este componente supongo que voy a crera un array por mi mismo
// con datos de 3 animes dos series y una peli y proceder normalmente

function PersonalRecomendations() {
  return (
    <ul className='grid grid-cols-3 justify-center mx-auto max-lg:grid-cols-1 px-20 py-16 gap-20'>
      {recomendations.map((anime, index) => (
        <li key={index} className='flex flex-col w-fit'>
          <Image
            src={anime.images.webp.large_image_url}
            alt={anime.title_japanese}
            width={300}
            height={400}
          />
          <h1 className='text-xl py-4 font-black'>{anime.title}</h1>
          <p className='px-6'>{anime.background}</p>
          <div className='flex gap-4'>
            <Link
              className=' py-2 px-3 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray-100 hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out'
              href={`/explorer/${anime.mal_id}`}
            >
              See Details
            </Link>
            <Link
              className='py-2 px-3 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray-100 hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out'
              href={``}
            >
              Trailer
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PersonalRecomendations;
