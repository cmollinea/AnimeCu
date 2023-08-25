'use client';
import { getData } from '@/app/services/getData';
import { EpisodesResponse } from '@/models/episodes.model';
import { StarIcon } from '@heroicons/react/24/solid';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { Pagination } from '@nextui-org/pagination';

function ListOfEpisodes() {
  const params = useParams();
  const id = params.id;
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: episodes,
    isError,
    isLoading
  } = useQuery(['Anime Episodes', currentPage], () =>
    getData<EpisodesResponse>(
      `https://api.jikan.moe/v4/anime/${id}/episodes?page=${currentPage}`
    )
  );

  const lastPage = useMemo(
    () => episodes?.pagination.last_visible_page,
    [episodes?.pagination.last_visible_page]
  );

  return (
    <div className='overflow-x-auto flex flex-col place-content-center items-center'>
      {lastPage && lastPage > 1 && (
        <Pagination
          total={lastPage}
          onChange={(page) => setCurrentPage(page)}
          page={currentPage}
          className='pb-4'
          classNames={{
            item: 'p-1 text-xs font-bold bg-base-300 rounded-lg',
            cursor: 'p-1 text-xs font-bold rounded-lg bg-lime-400 text-black'
          }}
        />
      )}
      {isLoading && (
        <span className='loading loading-ring loading-xs bg-lime-400'></span>
      )}
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
          {episodes?.data.map((episode, index) => (
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
