import Person from '@/app/(explorers)/components/Person';
import { Characters } from '@/models/characters.model';
import Image from 'next/image';

function CharacterCards({ characters }: { characters?: Characters[] }) {
  return (
    <ul className='flex flex-wrap gap-10 text-xs font-bold text-center no-underline place-content-center mx-auto'>
      {characters?.map((character) => (
        <Person
          name={character.character.name}
          image={character.character.images.webp.image_url}
          key={character.character.mal_id}
        />
      ))}
    </ul>
  );
}

export default CharacterCards;
