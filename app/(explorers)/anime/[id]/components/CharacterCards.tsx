import { Characters } from '@/models/characters.model';
import Image from 'next/image';

function CharacterCards({ characters }: { characters?: Characters[] }) {
  return (
    <ul className='flex flex-wrap gap-10 text-xs font-bold text-center no-underline place-content-center mx-auto'>
      {characters?.map((character) => (
        <li
          key={character.character.mal_id}
          className='flex flex-col gap-2 h-fit mb-6'
        >
          <div className='relative h-[100px] w-[100px]'>
            <Image
              alt={character.character.name}
              src={character.character.images.webp.image_url}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/ahJAAIYALWsWuAbQAAAABJRU5ErkJggg=='
              fill
              className='mask mask-squircle'
            />
          </div>
          <p>{character.character.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default CharacterCards;
