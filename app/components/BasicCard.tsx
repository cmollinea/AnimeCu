import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  info: {
    title: string;
    id: number;
    japaneseTitle: string;
    image: string;
    dataType: string;
    year?: number;
    rating?: string;
    author?: string;
  };
};

function BasicCard({ info }: Props) {
  return (
    <Link
      prefetch={false}
      className='max-w-[150px] border border-transparent group hover:border-lime-400/20 rounded-lg transition-colors duration-300 overflow-hidden'
      href={
        info.dataType === 'anime' ? `/anime/${info.id}` : `/manga/${info.id}`
      }
    >
      <div className='relative w-[150px] h-[230px] p-1'>
        <Image
          key={info.id}
          className=' group-hover:scale-110 transition-transform duration-300'
          src={info.image}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8+/ahJAAIYALWsWuAbQAAAABJRU5ErkJggg=='
          fill
          alt={info.japaneseTitle}
        />
      </div>
      <div className='z-10 relative bg-base-100 p-1'>
        {' '}
        <p className='truncate font-bold group-hover:text-lime-400 transition-colors duration-300'>
          {info.title || info.japaneseTitle}
        </p>
        {info.author && <p className='text-sm opacity-60'>{info.author}</p>}
        {info.rating && (
          <p className='text-xs opacity-60 truncate'>{info.rating}</p>
        )}
        {info.year && <p className='text-xs opacity-60'>{info.year}</p>}
      </div>
    </Link>
  );
}

export default BasicCard;
