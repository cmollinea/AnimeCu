import { ReactNode } from 'react';

function Label({ children }: { children: ReactNode }) {
  return <span className=' text-teal-400/30 font-normal'>{children}</span>;
}

export default Label;
