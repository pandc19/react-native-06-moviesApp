import {THE_MOVIE_DB_KEY} from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: '05ef4da9804192bec78c0477c2415a1c',
    api_key: THE_MOVIE_DB_KEY ?? 'no-key',
    language: 'es',
  },
});
