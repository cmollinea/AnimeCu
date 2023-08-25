import FeedbackImage from './FeedBackImage';
import RefreshButton from './RefreshButton';

function ErrorFeedbackWithRetry() {
  return (
    <>
      {' '}
      <h1 className='text-4xl font-bold'>Ups!!! something went wrong...</h1>
      <FeedbackImage source='/angry.svg' alt='Unknown Error' />
      <RefreshButton />
    </>
  );
}
export default ErrorFeedbackWithRetry;
