'use client';

import { Pagination } from '@nextui-org/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  lastPage?: number;
};

function NewPagination({ lastPage = 1 }: Props) {
  const searchParams = useSearchParams();
  const DANGEROUS_GOOD_TYPED_SEARCH_PARAMS: unknown = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = searchParams.get('page') || '1';

  const handlePagination = (page: number) => {
    const newSearchParams = new URLSearchParams(
      DANGEROUS_GOOD_TYPED_SEARCH_PARAMS as URLSearchParams
    );
    newSearchParams.set('page', page.toString());
    router.push(pathname + '?' + newSearchParams.toString());
  };

  return (
    <Pagination
      total={lastPage}
      page={parseInt(currentPage)}
      onChange={(page) => handlePagination(page)}
      className='pt-4'
      classNames={{
        item: 'rounded-lg bg-base-300 py-1 px-2',
        cursor: 'rounded-lg bg-lime-400 text-black py-1 px-2'
      }}
    />
  );
}

export default NewPagination;
