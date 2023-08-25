import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function InfoContainer({ children }: Props) {
  return (
    <section className='grid lg:grid-cols-3 max-lg:items-center max-lg:gap-10 gap-20 max-lg:px-8 max-lg:justify-center px-16 pb-10 max-lg:w-full'>
      {children}
    </section>
  );
}
export default InfoContainer;
