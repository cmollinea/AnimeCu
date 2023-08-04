'use client';
import { Rating } from 'flowbite-react';

function Stars({ rating }: { rating: number }) {
  return (
    <Rating>
      <Rating.Star
        className={`${
          rating / 2 >= 1
            ? 'group-hover:text-teal-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        }`}
      />
      <Rating.Star
        className={`${
          rating / 2 >= 2
            ? 'group-hover:text-teal-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        }`}
      />
      <Rating.Star
        className={`${
          rating / 2 >= 3
            ? 'group-hover:text-teal-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        }`}
      />
      <Rating.Star
        className={`${
          rating / 2 >= 4
            ? 'group-hover:text-teal-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        }`}
      />
      <Rating.Star
        className={`${
          rating / 2 >= 5
            ? 'group-hover:text-teal-400 group-hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out'
            : 'opacity-20'
        }`}
      />
      <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-teal-300 transition-all duration-300 ease-in-out'>
        {rating} out of 10
      </p>
    </Rating>
  );
}

export default Stars;
