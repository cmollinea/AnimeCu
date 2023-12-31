'use client';
import Link from 'next/link';
import { useCallback, useState, useEffect } from 'react';
import {
  ArrowUpRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/solid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import 'animate.css';

const NavBar = () => {
  const pathname = usePathname();
  const showSearch = pathname === '/anime' || pathname === '/manga';
  const searchParam = useSearchParams();
  const DANEROUS_GOOD_TYPED_SEARCH_PARAM: unknown = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState('');
  console.log(query);

  const searchParamHandler = useCallback(
    (value: string) => {
      const newParam = new URLSearchParams(
        DANEROUS_GOOD_TYPED_SEARCH_PARAM as URLSearchParams
      );
      newParam.delete('page');
      newParam.set('query', value);
      return newParam.toString();
    },
    [DANEROUS_GOOD_TYPED_SEARCH_PARAM]
  );

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(pathname + '?' + searchParamHandler(query));
  };

  useEffect(() => {
    setQuery('');
  }, [pathname]);

  return (
    <nav className='navbar bg-base-200/70 backdrop-blur-lg sticky top-0 z-30 shadow-lg'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='max-md:menu max-md:menu-lg max-md:dropdown-content max-md:mt-3 max-md:z-[1] max-md:p-2 max-md:shadow max-md:bg-base-100 max-md:rounded-box max-md:bg-base-200/70 max-md:backdrop-blur-lg w-32 md:w-fit flex px-4 gap-4 max-md:place-content-center max-md:text-center'
          >
            <span className=''>
              <Link
                className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-lime-400 transition-all group border-b border-transparent w-fit ${
                  pathname === '/' ? 'text-lime-400 border-b-lime-400' : ''
                }`}
                href='/'
              >
                Home{' '}
              </Link>
            </span>
            <span className=''>
              <Link
                className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-lime-400 transition-all group border-b border-transparent w-fit ${
                  pathname.includes('/anime')
                    ? 'text-lime-400 border-b-lime-400'
                    : ''
                }`}
                href='/anime'
              >
                Anime{' '}
              </Link>
            </span>
            <span className=''>
              <Link
                className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-lime-400 transition-all group border-b border-transparent w-fit ${
                  pathname === '/ranking'
                    ? 'text-lime-400 border-b-lime-400'
                    : ''
                }`}
                href='/ranking'
              >
                Ranking{' '}
              </Link>
            </span>
            <span className=''>
              <Link
                className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-lime-400 transition-all group border-b border-transparent w-fit ${
                  pathname.includes('/manga')
                    ? 'text-lime-400 border-b-lime-400'
                    : ''
                }`}
                href='/manga'
              >
                Manga{' '}
              </Link>
            </span>
            <span className=''>
              <Link
                className={`flex max-md:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-lime-400 transition-all group border-b border-transparent w-fit ${
                  pathname === '/about' ? 'text-lime-400 border-b-lime-400' : ''
                }`}
                href='/about'
              >
                About Me
              </Link>
            </span>
          </ul>
        </div>
      </div>
      <div className='navbar-end text-gray-300'>
        {showSearch && (
          <form
            onSubmit={(e) => handleSearch(e)}
            className='w-fit h-fit group relative mr-4 md:mr-8 animate__animated animate__bounceIn'
          >
            <input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              className='py-2 pl-1 w-44 lg:w-60 group rounded-lg border border-transparent focus:border-lime-400 ease-out transition-all duration-300 shadow-inner shadow-black outline-none placeholder:text-gray-400/50 placeholder:text-xs pr-8'
              type='text'
              placeholder='Ex: Naruto, OnePiece...'
            />
            <MagnifyingGlassIcon className='w-6 absolute right-2 top-3 transition-all text-gray-400/50 duration-300 ease-out group-focus-within:w-4 group-focus-within:text-lime-400' />
          </form>
        )}
        <Link className='text-2xl md:text-3xl font-black' href='/'>
          Anime<span className='text-lime-400'>.CU</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
