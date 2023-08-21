'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { MangaStatus } from '@/models/manga_filters.model';
import { AnimeStatus } from '@/models/anime_filters.model';

type Props = {
  filters: MangaStatus | AnimeStatus;
};

function Status({ filters }: Props) {
  const statusOptions = useMemo(() => Object.values(filters), [filters]);
  const router = useRouter();
  let firstTime = useRef(true);
  const searchParams = useSearchParams();
  const DANGEROUS_GOOD_TYPED_SEARCH_PARAMS: unknown = useSearchParams();
  const [status, setStatus] = useState(() => {
    if (searchParams.get('status')) {
      return searchParams.get('status') as string;
    } else {
      return filters.default;
    }
  });
  const pathname = usePathname();

  const searchParamHandler = useCallback(
    (value: string) => {
      const newParam = new URLSearchParams(
        DANGEROUS_GOOD_TYPED_SEARCH_PARAMS as URLSearchParams
      );
      newParam.delete('page');
      newParam.set('status', value);
      console.log(newParam);

      return newParam.toString();
    },
    [DANGEROUS_GOOD_TYPED_SEARCH_PARAMS]
  );

  useEffect(() => {
    if (!firstTime.current) {
      router.push(pathname + '?' + searchParamHandler(status));
    } else {
      firstTime.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <>
      <h2 className='mt-8 pb-4 text-xs text-lime-400/60'>Status:</h2>
      <div className='flex flex-col max-md:items-center gap-2'>
        {statusOptions.map((option) => (
          <button
            onClick={() => setStatus(option)}
            className={`text-xs font-bold hover:bg-lime-400 hover:text-black transition-all duration-300 border border-lime-400 rounded-full cursor-pointer w-fit max-md:w-20 px-2 min-w-[50px] ${
              status === option ? 'bg-lime-400 text-black' : ''
            }`}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
export default Status;
