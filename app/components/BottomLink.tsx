import Link from 'next/link';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

function BottomLink({ href, children }: Props) {
  return (
    <Link
      className='hover:text-lime-400 group text-gray-100/50 transition-all duration-300 ease-in-out font-black absolutes flex items-center absolute -bottom-6 right-6 max-md:text-xs'
      href={href}
    >
      {children}
      <ChevronDoubleRightIcon className='w-5 max-md:w-4 mt-1 group-hover:translate-x-2 transition-all duration-300 ease-in-out' />
    </Link>
  );
}

export default BottomLink;
