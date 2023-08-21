import { ReactNode } from 'react';

function Label({ children }: { children: ReactNode }) {
  return <span className=' text-lime-300/40 font-thin'>{children}</span>;
}

export default Label;
