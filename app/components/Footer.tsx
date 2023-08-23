import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='footer text-lime-400 p-10 bg-base-200 rounded-t-lg mt-10 relative'>
      <div>
        <div className='text-gray-300'>
          <Link className='text-5xl font-black' href='#'>
            Anime<span className='text-lime-400'>.CU</span>
          </Link>
          <p className='font-bold'>Made with ♥ by @procastinatorDev 🇨🇺</p>
        </div>
      </div>
      <div>
        <span className='footer-title'>Social</span>
        <Link
          href={'https://github.com/cmollinea'}
          target='_blank'
          className='link hover:underline link-hover'
        >
          GitHub
        </Link>
        <Link
          href={'https://t.me/Mouse_Potat0'}
          target='_blank'
          className='link hover:underline link-hover'
        >
          Telegram
        </Link>
        <Link
          href={'https://www.twitter.com/on3on3'}
          target='_blank'
          className='link hover:underline link-hover'
        >
          Twitter
        </Link>
        <Link
          href={'https://cu.linkedin.com/in/carlos-yoan-mollinea-43206827b'}
          target='_blank'
          className='link hover:underline link-hover'
        >
          LinkedIn
        </Link>
      </div>
      <div>
        <span className='footer-title'>Powered by</span>
        <Link
          href={'https://myanimelist.net/'}
          target='_blank'
          className='link hover:underline link-hover'
        >
          My Anime List
        </Link>
        <Link
          href={'https://jikan.moe/'}
          target='_blank'
          className='link hover:underline link-hover'
        >
          Jikan
        </Link>
        <Link
          href={'https://nextjs.org/'}
          target='_blank'
          className='link hover:underline link-hover'
        >
          NextJS
        </Link>
        <Link
          href={'https://tailwindcss.com/'}
          target='_blank'
          className='link hover:underline link-hover'
        >
          TailwindCSS
        </Link>
      </div>
      <div>
        <span className='footer-title'>Legal</span>
        <Link
          href={''}
          target='_blank'
          className='link hover:underline link-hover'
        >
          Terms of use
        </Link>
        <Link
          href={''}
          target='_blank'
          className='link hover:underline link-hover'
        >
          Privacy policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
