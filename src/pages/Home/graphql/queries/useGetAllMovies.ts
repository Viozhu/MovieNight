import { API_URL } from '@constants';
import { useGeneratedQuery } from '@graphqlHooks';
import {
  GetAllMoviesDocument,
  GetAllMoviesQuery,
  GetAllMoviesQueryVariables,
} from '@graphqlTypes';

type UseGetAllMoviesReturn = {
  status: 'loading' | 'error' | 'success' | 'idle';
  data: GetAllMoviesQuery | undefined;
  error: Error | undefined | {};
  refetch: () => void;
};

const UseGetAllMovies = (props): UseGetAllMoviesReturn => {
  const endpoint = API_URL;

  const { status, data, error, refetch } = useGeneratedQuery<
    GetAllMoviesQuery,
    unknown,
    GetAllMoviesQueryVariables,
    GetAllMoviesQuery
  >(endpoint, ' GetAllMovies', GetAllMoviesDocument, null, {
    refetchOnWindowFocus: false,
  });

  return { status, data, error, refetch };
};

export default UseGetAllMovies;
