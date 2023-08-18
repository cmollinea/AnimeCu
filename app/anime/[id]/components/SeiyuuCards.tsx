import { Characters } from '@/types/characters';
import Image from 'next/image';

function SeiyuuCards({ characters }: { characters?: Characters[] }) {
  const voiceActors = characters?.map((character) =>
    character.voice_actors.find((actor) => actor.language === 'Japanese')
  );

  return (
    <ul className='flex text-center font-bold text-xs flex-wrap gap-10 no-underline place-content-center'>
      {voiceActors?.map((voiceActor) => (
        <li key={voiceActor?.person.mal_id} className='flex gap-6 h-fit mb-6'>
          <div>
            <Image
              alt={voiceActor?.person.name as string}
              src={voiceActor?.person.images.jpg.image_url as string}
              height={100}
              width={100}
              className='mask mask-squircle'
            />
            <p>{voiceActor?.person.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SeiyuuCards;
