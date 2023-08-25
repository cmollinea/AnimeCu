import StyledSection from '@/app/components/StyledSection';
import Image from 'next/image';
import FeedbackImage from '../components/FeedBackImage';

function About() {
  return (
    <StyledSection heading='Who am I?'>
      <FeedbackImage
        source='/under_construction.svg'
        alt='Under Construction'
      />
    </StyledSection>
  );
}

export default About;
