import Image from 'next/image';

type Props = {
  name: string;
  image: string;
};

function Person({ name, image }: Props) {
  return (
    <li className='flex flex-col gap-2 h-fit mb-6'>
      <div className='relative h-[100px] w-[100px]'>
        <Image
          alt={name}
          src={image}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/ahJAAIYALWsWuAbQAAAABJRU5ErkJggg=='
          fill
          className='mask mask-squircle'
        />
      </div>
      <p>{name}</p>
    </li>
  );
}

export default Person;
