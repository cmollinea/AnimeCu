import { ReactNode } from 'react';
import Carrusel from './Carousel';

export default function HomeSection({
  children,
  heading
}: {
  children: ReactNode;
  heading: string;
}) {
  return (
    <section className='min-h-screen flex flex-col items-center relative'>
      <h1 className='text-4xl text-center font-black w-full pt-10 text-lime-400'>
        {heading}
      </h1>
      {children}
    </section>
  );
}
