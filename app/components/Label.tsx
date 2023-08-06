import { ReactNode } from 'react';

function Label({ children }: { children: ReactNode }) {
  return <span className=' text-lime-400/50 font-normal'>{children}</span>;
}

export default Label;
