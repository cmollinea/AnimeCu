'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  lastPage?: number;
};

function Pagination({ lastPage = 1 }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = searchParams.get('page') || '1';

  const prevPage = () => {
    if (Number(page) > 1) {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set('page', (Number(page) - 1).toString());
      return newSearchParams.toString();
    }
  };

  const nextPage = () => {
    if (Number(page) < lastPage) {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set('page', (Number(page) + 1).toString());
      return newSearchParams.toString();
    }
  };
  return (
    <div className='join mt-10'>
      <Link
        href={Number(page) > 1 ? pathname + '?' + prevPage() : ''}
        className='join-item btn text-gray-400 font-bold'
      >
        <ChevronLeftIcon className='w-4' />
      </Link>
      <div className='join-item btn w-24 text-gray-400 font-bold'>
        {`Page ${page}`}
      </div>
      <Link
        href={Number(page) < lastPage ? pathname + '?' + nextPage() : ''}
        className='join-item btn text-gray-400 font-bold'
      >
        <ChevronRightIcon className='w-4' />
      </Link>
    </div>
  );
}

export default Pagination;
