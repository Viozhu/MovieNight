import { API_URL } from "@constants";
import { useGeneratedQuery } from "@graphqlHooks";
import {
  PopularMoviesDocument,
  PopularMoviesQuery,
  PopularMoviesQueryVariables,
} from "@graphqlTypes";

type UsePopularMoviesReturn = {
  status: "loading" | "error" | "success" | "idle";
  data: PopularMoviesQuery | undefined;
  error: Error | undefined | {};
  refetch: () => void;
};

const UsePopularMovies = (props): UsePopularMoviesReturn => {
  const endpoint = API_URL;

  const { status, data, error, refetch } = useGeneratedQuery<
    PopularMoviesQuery,
    unknown,
    PopularMoviesQueryVariables,
    PopularMoviesQuery
  >(endpoint, "PopularMovies", PopularMoviesDocument, null, {
    refetchOnWindowFocus: false,
  });

  return { status, data, error, refetch };
};

export default UsePopularMovies;
