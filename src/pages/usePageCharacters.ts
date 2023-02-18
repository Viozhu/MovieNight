import {
  PagesCharactersQuery,
  PagesCharactersQueryVariables,
  PagesCharactersDocument,
} from "@graphqlTypes";
import { useGeneratedQuery } from "@graphqlHooks";
import { API_URL } from "@apiUrl";

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
