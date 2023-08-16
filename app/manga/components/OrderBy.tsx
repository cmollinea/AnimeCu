'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ORDER_BY } from '../constants/searchOptions';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const statusOptions = Object.keys(ORDER_BY);

function OrderBy() {
  const router = useRouter();
  let firstTime = useRef(true);
  const searchParams = useSearchParams();
  const [status, setStatus] = useState(() => {
    if (searchParams.get('order_by')) {
      return searchParams.get('order_by') as string;
    } else {
      return ORDER_BY.rank;
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
      newParam.set('order_by', value);
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
      <h2 className='mt-8 pb-4 text-xs text-lime-400/60'>Order by:</h2>

      <div className='flex flex-wrap sm:flex-col gap-4'>
        {statusOptions.map((option) => (
          <button
            onClick={() => setStatus(option)}
            className={`text-sm font-bold hover:bg-lime-400 hover:text-black transition-all duration-300 border border-lime-400 rounded-full min-w-[50px] cursor-pointer w-fit px-2 ${
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
export default OrderBy;
