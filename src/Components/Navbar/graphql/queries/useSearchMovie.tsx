import { API_URL } from '@constants';
import { useGeneratedQuery } from '@graphqlHooks';
import {
  SearchMovieDocument,
  SearchMovieQuery,
  SearchMovieQueryVariables,
} from '@graphqlTypes';

type UseSearchMovieReturn = {
  status: 'loading' | 'error' | 'success' | 'idle';
  data: SearchMovieQuery | undefined;
  error: Error | undefined | {};
  refetch: () => void;
};

const UseSearchMovie = ({ variables, enabled }): UseSearchMovieReturn => {
  const endpoint = API_URL;

  const { status, data, error, refetch } = useGeneratedQuery<
    SearchMovieQuery,
    unknown,
    SearchMovieQueryVariables,
    SearchMovieQuery
  >(endpoint, ' SearchMovie', SearchMovieDocument, variables, {
    refetchOnWindowFocus: false,
    enabled,
  });

  return { status, data, error, refetch };
};

export default UseSearchMovie;
