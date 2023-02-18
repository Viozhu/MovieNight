import { API_URL } from "@constants";
import { useGeneratedQuery } from "@graphqlHooks";
import {
  PopularMoviesDocument,
  PopularMoviesQuery,
  PopularMoviesQueryVariables,
} from "@graphqlTypes";

const UsePopularMovies = (props): any => {
  const { variables } = props;
  const endpoint = API_URL;

  const { status, data, error, refetch } = useGeneratedQuery<
    PopularMoviesQuery,
    unknown,
    PopularMoviesQueryVariables,
    PopularMoviesQuery
  >(endpoint, "PopularMovies", PopularMoviesDocument, variables, {
    refetchOnWindowFocus: false,
  });

  return { status, data, error, refetch };
};

export default UsePopularMovies;
