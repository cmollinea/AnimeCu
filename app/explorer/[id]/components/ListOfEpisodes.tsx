import EpisodesExample from '@/app/mocks/EpisodesExample.json';
import { StarIcon } from '@heroicons/react/24/solid';

function ListOfEpisodes() {
  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr className='bg-base-300'>
            <th>#</th>
            <th>Title</th>
            <th>Aired</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {EpisodesExample.data.map((episode, index) => (
            <tr
              key={episode.mal_id}
              className={`${
                index % 2 === 0 ? 'bg-base-200' : 'bg-base-300'
              } rounded-lg`}
            >
              <th className='text-lime-400'>{episode.mal_id}</th>
              <td>
                {episode.title} |
                <span className='text-lime-400'> {episode.title_japanese}</span>
              </td>
              <td>{new Date(episode.aired).toLocaleString()}</td>
              <td className='flex items-center gap-1'>
                {episode.score}
                <StarIcon className='fill-lime-400 w-4' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListOfEpisodes;
