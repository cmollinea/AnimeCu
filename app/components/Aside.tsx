'use client';

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import FilterModalButton from './FilterModalButton';
import { usePathname } from 'next/navigation';
import AnimeFilters from '../anime/components/AnimeFilters';
import MangaFilters from '../manga/components/MangaFilters';

function Aside() {
  const pathname = usePathname();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <aside
        className={`w-40 fixed right-0 top-16 bottom-0 z-40 max-md:backdrop-blur-xl ${
          modalIsOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
        } transition-all ease-in-out max-md:flex max-md:flex-col max-md:place-content-start max-md:pt-8 max-md:items-center max-md:bg-base-200/20 md:w-fit md:px-4 md:py-8 md:h-fit md:sticky md:top-0`}
      >
        {pathname === '/anime' ? <AnimeFilters /> : <MangaFilters />}
        <XMarkIcon
          onClick={() => setModalIsOpen(false)}
          className='md:hidden absolute top-0 right-2 w-6 cursor-pointer hover:text-red-500 transition-colors duration-300 ease-in-out '
        />
      </aside>
      <FilterModalButton
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}
export default Aside;
