'use client';
import ListOfEpisodes from './ListOfEpisodes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function DropDown() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className='p-10 '>
        <div
          tabIndex={0}
          className='collapse collapse-arrow border border-base-300 bg-base-200 '
        >
          <div className='collapse-title text-xl font-medium'>
            <h2 className='lg:text-2xl text-lg font-bold text-lime-400 text-center'>
              List of Episodes
            </h2>
          </div>
          <div className='collapse-content overflow-x-auto'>
            <ListOfEpisodes />
          </div>
        </div>
      </section>
    </QueryClientProvider>
  );
}

export default DropDown;
