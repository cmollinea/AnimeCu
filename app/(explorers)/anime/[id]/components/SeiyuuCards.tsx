import Person from '@/app/(explorers)/components/Person';
import { Characters } from '@/models/characters.model';
import Image from 'next/image';

function SeiyuuCards({ characters }: { characters: Characters[] }) {
  const voiceActors = characters.map((character) =>
    character.voice_actors.find((actor) => actor.language === 'Japanese')
  );

  return (
    <ul className='flex text-center font-bold text-xs flex-wrap gap-10 no-underline place-content-center mx-auto'>
      {voiceActors?.map((voiceActor) => (
        <Person
          key={voiceActor?.person.mal_id}
          name={voiceActor?.person.name as string}
          image={voiceActor?.person.images.jpg.image_url as string}
        />
      ))}
    </ul>
  );
}

export default SeiyuuCards;
