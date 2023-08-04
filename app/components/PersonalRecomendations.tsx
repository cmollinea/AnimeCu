import OneAnime from '@/app/mocks/OneAnimeInfo.json';
import Image from 'next/image';

const recomendations = [OneAnime.data, OneAnime.data, OneAnime.data];

// Para este componente supongo que voy a crera un array por mi mismo
// con datos de 3 animes dos series y una peli y proceder normalmente

function PersonalRecomendations() {
  return (
    <ul className='grid grid-cols-3 justify-center max-lg:grid-cols-1 w-full px-20 py-10 gap-10'>
      {recomendations.map((anime, index) => (
        <li key={index} className='flex flex-col'>
          <Image
            src={anime.images.webp.large_image_url}
            alt={anime.title_japanese}
            width={300}
            height={400}
          />
          <h1 className='text-xl font-bold'>{anime.title}</h1>
          <p className='px-6'>{anime.background}</p>
          <div className='flex gap-4'>
            <button className=' btn btn-primary bg-teal-400/80  text-gray-100 border-none hover:bg-teal-600'>
              See Details
            </button>
            <button className=' btn btn-secondary'>Trailer</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PersonalRecomendations;
