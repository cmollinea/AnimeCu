'use client';

import OrderBy from '@/app/components/OrderBy';
import Status from '@/app/components/Status';
import Type from '@/app/components/Type';
import { STATUS, ORDER_BY, TYPE } from '../constant/anime_filters';
function AnimeFilters() {
  return (
    <>
      <Status filters={STATUS} />
      <OrderBy filters={ORDER_BY} />
      <Type filters={TYPE} />
    </>
  );
}

export default AnimeFilters;
