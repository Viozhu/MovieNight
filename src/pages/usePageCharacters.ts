import { API_URL } from "@constants";
import { useGeneratedQuery } from "@graphqlHooks";
import {
  PagesCharactersDocument,
  PagesCharactersQuery,
  PagesCharactersQueryVariables,
} from "@graphqlTypes";

const UsePageCharacters = (props): any => {
  const { variables } = props;
  const endpoint = API_URL;

  const { status, data } = useGeneratedQuery<
    PagesCharactersQuery,
    unknown,
    PagesCharactersQueryVariables,
    PagesCharactersQuery
  >(endpoint, "PageCharacters", PagesCharactersDocument, variables);

  return { status, data };
};

export default UsePageCharacters;
