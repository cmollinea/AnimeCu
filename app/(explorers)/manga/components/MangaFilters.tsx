'use client';

import { STATUS, ORDER_BY, TYPE } from '../constants/manga_filters';
import Filters from '../../components/Filters';

function SearchOptions() {
  return (
    <>
      <Filters filters={STATUS} newSearchParam='status' />
      <Filters filters={ORDER_BY} newSearchParam='order_by' />
      <Filters filters={TYPE} newSearchParam='type' />
    </>
  );
}

export default SearchOptions;
