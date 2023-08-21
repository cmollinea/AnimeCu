'use client';
import ListOfEpisodes from './ListOfEpisodes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function DropDown() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className='p-10 '>
        <div
          className='tooltip w-full before:bg-base-300 before:font-bold before:text-gray-400 rounded-2xl'
          data-tip='Click me to show/hide list of episodes'
        >
          <div className='collapse overflow-x-auto bg-base-200'>
            <input type='checkbox' />
            <div className='collapse-title text-xl font-medium'>
              <h2 className='lg:text-2xl text-lg font-bold text-lime-400 w-full text-center'>
                List of Episodes
              </h2>
            </div>
            <div className='collapse-content'>
              <ListOfEpisodes />
            </div>
          </div>
        </div>
      </section>
    </QueryClientProvider>
  );
}

export default DropDown;
