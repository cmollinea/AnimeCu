import { Characters } from '@/types/characters';
import CharacterCards from './CharacterCards';
import { getData } from '@/app/services/getData';
import Divider from '@/app/components/Divider';

type Props = {
  params: {
    id: string;
  };
};

async function MainCharacters({ params }: Props) {
  const characters = await getData<Characters>(
    `https://api.jikan.moe/v4/manga/${params.id}/characters`
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
            <h2 className='lg:text-lg text-md font-bold text-lime-400 text-center'>
              Main Characters
            </h2>
            <CharacterCards characters={mainCharacters} />
          </section>
        </>
      ) : null}
    </>
  );
}

export default MainCharacters;
