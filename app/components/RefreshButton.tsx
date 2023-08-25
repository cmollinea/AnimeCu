'use client';

import { useRouter } from 'next/navigation';

function RefreshButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.refresh()}
      className='py-2 lg:py-2 px-6 lg:px-10 flex items-center gap-0.5 font-bold rounded-lg bg-base-100 border border-solid border-lime-400/50  text-gray- hover:bg-lime-400 hover:text-black transition-all duration-300 ease-in-out group'
    >
      Try Again
    </button>
  );
}

export default RefreshButton;
