import { Characters } from '@/types/characters';
import Image from 'next/image';

function CharacterCards({ characters }: { characters: Characters[] }) {
  return (
    <ul className='flex flex-wrap justify-around gap-10 text-center no-underline'>
      {characters.map((character) => (
        <li key={character.character.mal_id} className='flex gap-6 h-fit mb-6'>
          <div>
            <Image
              alt={character.character.name}
              src={character.character.images.webp.image_url}
              height={150}
              width={150}
              className='mask mask-squircle'
            />
            <p>{character.character.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CharacterCards;
