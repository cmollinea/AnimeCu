'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { MangaStatus } from '@/models/manga_filters.model';
import { AnimeStatus } from '@/models/anime_filters.model';
import { AnimeOrderBy } from '@/models/anime_filters.model';
import { MangaOrderBy } from '@/models/manga_filters.model';
import { AnimeType } from '@/models/anime_filters.model';
import { MangaType } from '@/models/manga_filters.model';

type Props = {
  filters:
    | MangaStatus
    | AnimeStatus
    | AnimeOrderBy
    | MangaOrderBy
    | AnimeType
    | MangaType;
  newSearchParam: string;
};

function Filters({ filters, newSearchParam }: Props) {
  const statusOptions = useMemo(() => Object.values(filters), [filters]);
  const router = useRouter();
  let firstTime = useRef(true);
  const searchParams = useSearchParams();
  const DANGEROUS_GOOD_TYPED_SEARCH_PARAMS: unknown = useSearchParams();
  const [filter, setFilter] = useState(() => {
    if (searchParams.get(newSearchParam)) {
      return searchParams.get(newSearchParam) as string;
    } else {
      return filters.default;
    }
  });
  const pathname = usePathname();

  const searchParamHandler = useCallback(
    (value: string) => {
      const newURLSearchParam = new URLSearchParams(
        DANGEROUS_GOOD_TYPED_SEARCH_PARAMS as URLSearchParams
      );
      newURLSearchParam.delete('page');
      newURLSearchParam.set(newSearchParam, value);
      console.log(newURLSearchParam);

      return newURLSearchParam.toString();
    },
    [DANGEROUS_GOOD_TYPED_SEARCH_PARAMS, newSearchParam]
  );

  useEffect(() => {
    if (!firstTime.current) {
      router.push(pathname + '?' + searchParamHandler(filter));
    } else {
      firstTime.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <>
      <h2 className='mt-8 pb-4 text-xs text-lime-400/60'>{newSearchParam}:</h2>
      <div className='flex flex-col max-md:items-center gap-4 md:gap-2'>
        {statusOptions.map((option) => (
          <button
            onClick={() => setFilter(option)}
            className={`text-xs max-md:text-md font-bold hover:bg-lime-400 hover:text-black transition-all duration-300 border border-lime-400 rounded-full cursor-pointer w-fit max-md:w-20 px-2 min-w-[50px] ${
              filter === option ? 'bg-lime-400 text-black' : ''
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
export default Filters;
