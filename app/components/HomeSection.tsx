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
    <section className='min-h-screen flex flex-col place-content-center items-center relative'>
      <h1 className='text-4xl text-center font-black pt-10 w-full text-teal-400'>
        {heading}
      </h1>
      {children}
    </section>
  );
}
