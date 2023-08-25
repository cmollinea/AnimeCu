import Image from 'next/image';

type Props = {
  source: string;
  alt: string;
};

function FeedbackImage({ source, alt }: Props) {
  return (
    <>
      <figure className='h-[400px] md:h-[500px] w-[300px] md:w-[500px] relative'>
        <Image fill src={source} alt={alt} />
      </figure>
    </>
  );
}

export default FeedbackImage;
