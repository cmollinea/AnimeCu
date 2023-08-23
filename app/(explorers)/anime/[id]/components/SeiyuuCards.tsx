import { Characters } from '@/models/characters.model';
import Image from 'next/image';

function SeiyuuCards({ characters }: { characters?: Characters[] }) {
  const voiceActors = characters?.map((character) =>
    character.voice_actors.find((actor) => actor.language === 'Japanese')
  );

  return (
    <ul className='flex text-center font-bold text-xs flex-wrap gap-10 no-underline place-content-center mx-auto'>
      {voiceActors?.map((voiceActor) => (
        <li
          key={voiceActor?.person.mal_id}
          className='flex flex-col gap-2 h-fit mb-6'
        >
          <div className='relative w-[100px] h-[100px]'>
            <Image
              alt={voiceActor?.person.name as string}
              src={voiceActor?.person.images.jpg.image_url as string}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/ahJAAIYALWsWuAbQAAAABJRU5ErkJggg=='
              fill
              className='mask mask-squircle'
            />
          </div>
          <p>{voiceActor?.person.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default SeiyuuCards;
