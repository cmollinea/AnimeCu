import { Characters } from '@/models/characters.model';
import CharacterCards from './CharacterCards';
import SeiyuuCards from './SeiyuuCards';
import { getData } from '@/app/services/getData';
import Divider from '@/app/components/Divider';

type Props = {
  params: {
    id: string;
  };
};

async function MainCharacters({ params }: Props) {
  const characters = await getData<Characters>(
    `https://api.jikan.moe/v4/anime/${params.id}/characters`
  );
  const mainCharacters = characters?.data.filter(
    (char) => char.role === 'Main'
  );

  return (
    <>
      {mainCharacters ? (
        <>
          {' '}
          <Divider />
          <section className='py-2 grid  gap-4'>
            <h2 className='lg:text-lg text-base text-lime-400 text-center'>
              Main Characters
            </h2>
            <CharacterCards characters={mainCharacters} />
            <h2 className='lg:text-lg text-base text-lime-400 text-center'>
              Seiyuus
            </h2>
            <SeiyuuCards characters={mainCharacters} />
          </section>
        </>
      ) : null}
    </>
  );
}

export default MainCharacters;
