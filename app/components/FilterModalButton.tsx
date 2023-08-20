'use client';

import { FunnelIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
};

function FilterModalButton({ modalIsOpen, setModalIsOpen }: Props) {
  return (
    <button
      onClick={() => setModalIsOpen(true)}
      className={`fixed md:hidden z-50 bottom-6 right-6 bg-lime-400/80 p-2 rounded-full ${
        modalIsOpen ? 'hidden' : ''
      }`}
    >
      <FunnelIcon className='w-5 fill-black' />
    </button>
  );
}
export default FilterModalButton;
