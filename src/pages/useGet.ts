import { CharactersQuery,CharactersQueryVariables,CharactersDocument } from "@graphqlTypes";
import { useGeneratedQuery } from "@graphqlHooks";

import { API_URL } from "./apiurl";

const UseCharacters = (props): any => {
    const { variables } = props;
    const endpoint = API_URL

    const { status, data } = useGeneratedQuery<
      CharactersQuery,
      unknown,
      CharactersQueryVariables,
      CharactersQuery
    >(
      endpoint,
      'UseCharacters',
      CharactersDocument,
      variables,
     
    );
  
    return { status, data };
  };
  
  export default UseCharacters;