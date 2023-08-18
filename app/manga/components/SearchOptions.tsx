'use client';

import OrderBy from './OrderBy';
import Status from './Status';
import Type from './Type';

function SearchOptions() {
  return (
    <>
      <Status />
      <OrderBy />
      <Type />
    </>
  );
}

export default SearchOptions;
