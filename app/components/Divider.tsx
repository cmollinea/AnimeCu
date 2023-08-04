import { ChevronDownIcon } from '@heroicons/react/20/solid';

function Divider() {
  return (
    <div className='divider after:bg-base-300/50 before:bg-base-300/50 my-8'>
      <ChevronDownIcon className='w-16 text-base-300/50' />
    </div>
  );
}

export default Divider;
