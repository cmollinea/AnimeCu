import { AnimeInfo } from '@/models/anime_full_info.model';

type Response = {
  errorMessage: string | null;
  data: AnimeInfo | null;
};

export const getAnimeFullInfo = async (id: string): Promise<Response> => {
  const API_ENDPOINT = `https://api.jikan.moe/v4/anime/${id}/full`;

  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Error : ${response.status} | ${response.statusText}`);
    }
    const data = await response.json();
    return { data, errorMessage: null };
  } catch (err) {
    console.log(err);
    const errorMessage = 'Something went wrong';
    return { errorMessage, data: null };
  }
};
