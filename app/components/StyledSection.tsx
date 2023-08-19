import { ReactNode } from 'react';

export default function HomeSection({
  children,
  heading
}: {
  children: ReactNode;
  heading: string;
}) {
  return (
    <section className='sm:min-h-screen min-h-[700px] flex flex-col items-center relative w-full'>
      <h1 className='text-2xl sm:text-4xl text-center font-black w-full pt-4 sm:pt-10 text-lime-400'>
        {heading}
      </h1>
      {children}
    </section>
  );
}
