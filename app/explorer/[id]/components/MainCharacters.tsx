import { Characters } from '@/types/characters';
import CharacterCards from './CharacterCards';
import SeiyuuCards from './SeiyuuCards';
import { getData } from '@/app/services/getData';

type Props = {
  params: {
    id: string;
  };
};

async function MainCharacters({ params }: Props) {
  const characters = await getData<Characters>('the url');
  const mainCharacters = characters?.data.filter(
    (char) => char.role === 'Main'
  );

  return (
    <section className='py-2 grid place-content-center gap-10 font-bold'>
      <h2 className='lg:text-2xl text-lg font-bold text-lime-400 text-center pb-10'>
        Main Characters
      </h2>
      <CharacterCards characters={mainCharacters as Characters[]} />
      <h2 className='lg:text-2xl text-lg font-bold text-lime-400 text-center'>
        Seiyuus
      </h2>
      <SeiyuuCards characters={mainCharacters as Characters[]} />
    </section>
  );
}

export default MainCharacters;
