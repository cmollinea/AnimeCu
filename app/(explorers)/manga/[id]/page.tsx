import { Metadata } from 'next';
import FirstDivition from './components/FirstDivition';
import SecondDivition from './components/SecondDivition';
import { getData } from '@/app/services/getData';
import { MangaInfo } from '@/models/manga_full_info.model';
import InfoHeading from '../../components/InfoHeading';
import ErrorFeedbackWithRetry from '@/app/components/ErrorFeedbackWithRetry';
import StyledSection from '@/app/components/StyledSection';
import InfoContainer from '../../components/InfoCOntainer';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getData<MangaInfo>(
    `https://api.jikan.moe/v4/manga/${params.id}/full`
  );
  return {
    title: `AnimeCu | ${data?.data.title || 'Error'}`
  };
}

async function AnimeInfo({ params }: Props) {
  const data = await getData<MangaInfo>(
    `https://api.jikan.moe/v4/manga/${params.id}/full`
  );
  const manga = data?.data;

  if (typeof manga === 'undefined') {
    return (
      <StyledSection heading=''>
        <ErrorFeedbackWithRetry />
      </StyledSection>
    );
  } else {
    return (
      <>
        <InfoHeading
          title={manga?.title}
          title_japanese={manga?.title_japanese}
          score={manga?.score}
        />
        <InfoContainer>
          <FirstDivition manga={manga} />
          <SecondDivition manga={manga} params={params} />
        </InfoContainer>
      </>
    );
  }
}

export default AnimeInfo;
