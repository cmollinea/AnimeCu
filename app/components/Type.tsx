'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { AnimeType } from '@/models/anime_filters.model';
import { MangaType } from '@/models/manga_filters.model';

type Props = {
  filters: AnimeType | MangaType;
};

function Type({ filters }: Props) {
  const typeOptions = useMemo(() => Object.values(filters), [filters]);

  const router = useRouter();
  let firstTime = useRef(true);
  const searchParams = useSearchParams();
  const [selectedType, setSelectedType] = useState(() => {
    if (searchParams.get('type')) {
      return searchParams.get('type') as string;
    } else {
      return filters.default;
    }
  });
  const DANGEROUS_GOOD_TYPED_SEARCH_PARAMS: unknown = useSearchParams();

  const pathname = usePathname();

  const searchParamHandler = useCallback(
    (value: string) => {
      const newParam = new URLSearchParams(
        DANGEROUS_GOOD_TYPED_SEARCH_PARAMS as URLSearchParams
      );
      newParam.delete('page');
      newParam.set('type', value);
      console.log(newParam);

      return newParam.toString();
    },
    [DANGEROUS_GOOD_TYPED_SEARCH_PARAMS]
  );

  useEffect(() => {
    if (!firstTime.current) {
      router.push(pathname + '?' + searchParamHandler(selectedType));
    } else {
      firstTime.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType]);

  return (
    <>
      <h2 className='py-4 text-xs text-lime-400/60'>Order by:</h2>

      <div className='flex flex-wrap sm:flex-col gap-2'>
        {typeOptions.map((type) => (
          <button
            onClick={() => setSelectedType(type)}
            className={`text-xs font-bold hover:bg-lime-400 hover:text-black transition-all duration-300 border border-lime-400 rounded-full min-w-[50px] cursor-pointer w-fit px-2 ${
              selectedType === type ? 'bg-lime-400 text-black' : ''
            }`}
            key={type}
          >
            {type}
          </button>
        ))}
      </div>
    </>
  );
}
export default Type;
