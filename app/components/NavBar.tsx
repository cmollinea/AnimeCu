'use client';
import Link from 'next/link';
import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
  return (
    <nav className='navbar bg-base-200/70 backdrop-blur-lg sticky top-0 z-50 shadow-lg'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle sm:hidden'>
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
            className='max-sm:menu max-sm:menu-sm max-sm:dropdown-content max-sm:mt-3 max-sm:z-[1] max-sm:p-2 max-sm:shadow max-sm:bg-base-100 max-sm:rounded-box max-sm:bg-base-200/70 max-sm:backdrop-blur-lg w-52 flex px-4 gap-2'
          >
            <li>
              <Link
                className='flex max-sm:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-teal-400 transition-all group'
                href='/'
              >
                Home{' '}
                <ArrowUpRightIcon className='w-3 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-all duration-300 ease-in-out' />{' '}
              </Link>
            </li>
            <li>
              <Link
                className='flex max-sm:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-teal-400 transition-all group'
                href='/explorer'
              >
                Explorer{' '}
                <ArrowUpRightIcon className='w-3 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-all duration-300 ease-in-out' />{' '}
              </Link>
            </li>
            <li>
              <Link
                className='flex max-sm:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-teal-400 transition-all group'
                href='/ranking'
              >
                Ranking{' '}
                <ArrowUpRightIcon className='w-3 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-all duration-300 ease-in-out' />{' '}
              </Link>
            </li>
            <li>
              <Link
                className='flex max-sm:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-teal-400 transition-all group'
                href='/manga'
              >
                Manga{' '}
                <ArrowUpRightIcon className='w-3 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-all duration-300 ease-in-out' />{' '}
              </Link>
            </li>
            <li>
              <Link
                className='flex max-sm:text-xl items-center gap-0.5 opacity-80 font-bold hover:opacity-100 hover:text-teal-400 transition-all group'
                href='/dev'
              >
                Dev
                <ArrowUpRightIcon className='w-3 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-all duration-300 ease-in-out' />{' '}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-end text-gray-300'>
        <Link className='text-3xl font-black' href='#'>
          Anime<span className='text-teal-400'>.CU</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
