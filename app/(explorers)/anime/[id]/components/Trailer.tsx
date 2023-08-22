'use client';

import ReactPlayer from 'react-player/youtube';

type Props = {
  url: string;
};

function Trailer({ url }: Props) {
  return (
    <div className='md:h-[250px] h-[200px] md:w-[500px] w-[300px] relative mt-10'>
      <ReactPlayer controls width='100%' height='100%' url={url} />
    </div>
  );
}

export default Trailer;
