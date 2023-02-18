import { PagesCharacters, PagesCharactersVariables,PagesCharactersDocument } from "@graphqlTypes";
import { useGeneratedQuery } from "@graphqlHooks";

import { API_URL } from "./apiurl";

const UsePageCharacters = (props): any => {
    const { variables } = props;
    const endpoint = API_URL

    const { status, data } = useGeneratedQuery<
      PagesCharacters,
      unknown,
      PagesCharactersVariables,
      PagesCharacters
    >(
      endpoint,
      'PageCharacters',
      PagesCharactersDocument,
      variables,
     
    );
  
    return { status, data };
  };
  
  export default UsePageCharacters;