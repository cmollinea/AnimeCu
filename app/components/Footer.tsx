import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='footer text-teal-400 p-10 bg-base-200'>
      <div>
        <div className='text-gray-300'>
          <Link className='text-3xl font-black' href='#'>
            Anime<span className='text-teal-400'>.CU</span>
          </Link>
          <p className='font-bold'>Made with ♥ by @procastinatorDev 🇨🇺</p>
        </div>
      </div>
      <div>
        <span className='footer-title'>Social</span>
        <Link href={''} className='link link-hover'>
          GitHub
        </Link>
        <Link href={''} className='link link-hover'>
          Telegram
        </Link>
        <Link href={''} className='link link-hover'>
          Twitter
        </Link>
        <Link href={''} className='link link-hover'>
          LinkedIn
        </Link>
      </div>
      <div>
        <span className='footer-title'>Powered by</span>
        <Link href={''} className='link link-hover'>
          My Anime List
        </Link>
        <Link href={''} className='link link-hover'>
          Jikan
        </Link>
        <Link href={''} className='link link-hover'>
          NextJS
        </Link>
        <Link href={''} className='link link-hover'>
          TailwindCSS
        </Link>
      </div>
      <div>
        <span className='footer-title'>Legal</span>
        <Link href={''} className='link link-hover'>
          Terms of use
        </Link>
        <Link href={''} className='link link-hover'>
          Privacy policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
