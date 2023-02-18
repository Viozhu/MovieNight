
import { gql, GraphQLClient } from 'graphql-request';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from 'react-query';


export const useGeneratedMutation = <TMutation, TVariables, TError, TContext>(
  endpoint: string,
  mutation: string,
  options?: UseMutationOptions<TMutation, TError, TVariables, TContext>,
): UseMutationResult<TMutation, TError, TVariables, TContext> => {

  const mutationData = useMutation(
    async (variables: TVariables): Promise<TMutation> => {
      const gqlQuery = gql`
        ${mutation}
      `;

      const client_ = new GraphQLClient(endpoint, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
         
        },
      });

      try {
        const result = await client_.request<TMutation>(
          gqlQuery,
          variables,
        );
        return result;
      } catch (error) {
        alert(error)
      }

      return;
    },
    options,
  );

  return mutationData;
};
