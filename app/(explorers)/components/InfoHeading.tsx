import { StarIcon } from '@heroicons/react/24/solid';

type Props = {
  title: string;
  title_japanese: string;
  score: number;
};

function InfoHeading({ title, title_japanese, score }: Props) {
  return (
    <div className='lg:w-full flex justify-center items-center py-10 text-lg lg:text-2xl font-bold gap-10'>
      <h1 className=' text-lime-400 flex px-4 text-center'>
        {title}
        <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs max-lg:hidden'></span>
        <span className='max-lg:hidden'>{title_japanese}</span>
        <span className='divider divider-horizontal after:bg-base-300/80 before:bg-base-300/80 text-xs'></span>
        <span className='flex items-center gap-1 text-gray-300'>
          {score}
          <StarIcon className='fill-lime-400 w-8' />
        </span>
      </h1>
    </div>
  );
}
export default InfoHeading;
