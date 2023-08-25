import { Metadata } from 'next';
import FirstDivition from './components/FirstDivition';
import { AnimeInfo } from '@/models/anime_full_info.model';
import SecondDivition from './components/SecondDivition';
import { StarIcon } from '@heroicons/react/24/solid';
import Divider from '@/app/components/Divider';
import DropDown from './components/DropDown';
import { getAnimeFullInfo } from './services/getAnimeFullInfo';
import ErrorFeedbackWithRetry from '@/app/components/ErrorFeedbackWithRetry';
import StyledSection from '@/app/components/StyledSection';
import InfoHeading from '../../components/InfoHeading';
import InfoContainer from '../../components/InfoCOntainer';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getAnimeFullInfo(params.id);
  return {
    title: `AnimeCu | ${data?.data.title || 'An Error Ocurred'}`
  };
}

async function AnimeInfo({ params }: Props) {
  const data = await getAnimeFullInfo(params.id);
  const anime = data?.data;
  if (typeof anime === 'undefined') {
    return (
      <StyledSection heading=''>
        <ErrorFeedbackWithRetry />
      </StyledSection>
    );
  } else {
    return (
      <>
        <InfoHeading
          title={anime?.title}
          title_japanese={anime?.title_japanese}
          score={anime?.score}
        />
        <InfoContainer>
          <FirstDivition anime={anime as AnimeInfo} />
          <SecondDivition anime={anime as AnimeInfo} params={params} />
        </InfoContainer>
        {anime?.type !== 'Movie' && anime.episodes > 0 && (
          <>
            {' '}
            <Divider />
            <DropDown />
          </>
        )}
      </>
    );
  }
}

export default AnimeInfo;
