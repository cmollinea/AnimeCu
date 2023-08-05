import characters from '@/app/mocks/characters.json';
import Image from 'next/image';
import { VoiceActor, Characters } from '@/types/characters';
import CharacterCards from './CharacterCards';
import SeiyuuCards from './SeiyuuCards';

// Aqui usar el param id
// para hacer fetch a los caracteres
// y asi tener los datos

function MainCharacters() {
  const mainCharacters = characters.data.filter((char) => char.role === 'Main');

  return (
    <section className='py-2 grid place-content-center gap-10'>
      <h2 className='lg:text-2xl text-lg font-bold text-teal-400 text-center pb-10'>
        Main Characters
      </h2>
      <CharacterCards characters={mainCharacters as Characters[]} />
      <h2 className='lg:text-2xl text-lg font-bold text-teal-400 text-center'>
        Seiyuus
      </h2>
      <SeiyuuCards characters={mainCharacters as Characters[]} />
    </section>
  );
}

export default MainCharacters;
