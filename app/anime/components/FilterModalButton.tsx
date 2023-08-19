'use client';

import { FunnelIcon } from '@heroicons/react/24/solid';

function FilterModalButton() {
  return (
    <button className='fixed bottom-6 right-6 bg-lime-400/80 p-2 rounded-full'>
      <FunnelIcon className='w-5 fill-black' />
    </button>
  );
}
export default FilterModalButton;
