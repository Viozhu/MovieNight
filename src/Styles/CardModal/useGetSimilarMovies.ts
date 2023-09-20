import { API_URL } from '@constants';
import { useGeneratedQuery } from '@graphqlHooks';
import {
  SimilarMoviesDocument,
  SimilarMoviesQuery,
  SimilarMoviesQueryVariables,
} from '@graphqlTypes';

interface UseSimilarMoviesReturn {
  status: 'loading' | 'error' | 'success' | 'idle';
  data: SimilarMoviesQuery | undefined;
  error: Error | undefined | {};
  refetch: () => void;
}

const UseSimilarMovies = ({ variables, enabled }): UseSimilarMoviesReturn => {
  const endpoint = API_URL;

  const { status, data, error, refetch } = useGeneratedQuery<
    SimilarMoviesQuery,
    unknown,
    SimilarMoviesQueryVariables,
    SimilarMoviesQuery
  >(endpoint, ' SimilarMovies', SimilarMoviesDocument, variables, {
    refetchOnWindowFocus: false,
    enabled,
  });

  return { status, data, error, refetch };
};

export default UseSimilarMovies;
