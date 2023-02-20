import { gql, GraphQLClient } from 'graphql-request';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from 'react-query';

import { API_KEY } from '@constants';

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
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      try {
        const result = await client_.request<TMutation>(gqlQuery, variables);
        return result;
      } catch (error) {
        alert(error);
      }

      return;
    },
    options,
  );

  return mutationData;
};
