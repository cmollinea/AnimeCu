import { Top } from '@/types/top10';

type Response = {
  errorMessage?: string;
  data?: Top;
};
const getTopAnimeByPopularity = async (
  limit = '25',
  page = '1'
): Promise<Response | undefined> => {
  const API_ENDPOINT = `https://api.jikan.moe/v4/top/anime?filter=bypopularity&type=tv&limit=${limit}&page=${page}`;
  try {
    const response = await fetch(API_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Error : ${response.status} | ${response.statusText}`);
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    const errorMessage = 'Data Fetch Fails';
    return { errorMessage };
  }
};
