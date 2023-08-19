import { StarIcon } from '@heroicons/react/24/solid';

function Stars({ rating }: { rating: number }) {
  return (
    <div className='flex'>
      <StarIcon
        className={`${
          rating / 2 >= 1
            ? 'group-hover:text-lime-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        } w-3 sm:w-5`}
      />
      <StarIcon
        className={`${
          rating / 2 >= 2
            ? 'group-hover:text-lime-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        } w-3 sm:w-5`}
      />
      <StarIcon
        className={`${
          rating / 2 >= 3
            ? 'group-hover:text-lime-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        } w-3 sm:w-5`}
      />
      <StarIcon
        className={`${
          rating / 2 >= 4
            ? 'group-hover:text-lime-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        } w-3 sm:w-5`}
      />
      <StarIcon
        className={`${
          rating / 2 >= 5
            ? 'group-hover:text-lime-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        } w-3 sm:w-5`}
      />
      <p className='ml-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-lime-300 transition-all duration-300 ease-in-out'>
        {rating} out of 10
      </p>
    </div>
  );
}

export default Stars;
