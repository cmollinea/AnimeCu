'use client';

import { STATUS, ORDER_BY, TYPE } from '../constant/anime_filters';
import Filters from '@/app/components/Filters';
function AnimeFilters() {
  return (
    <>
      <Filters filters={STATUS} newSearchParam='status' />
      <Filters filters={ORDER_BY} newSearchParam='order_by' />
      <Filters filters={TYPE} newSearchParam='type' />
    </>
  );
}

export default AnimeFilters;
