import { gql, GraphQLClient } from 'graphql-request'
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'
import { API_KEY } from '@constants'

export const useGeneratedQuery = <TData, TError, TVariables, TQuery>(
  endpoint: string,
  queryName: string,
  query: string,
  queryVariables?: TVariables,
  options?: UseQueryOptions<TQuery, TError, TData>,
): UseQueryResult<TData, TError> => {
  const queryData = useQuery<TQuery, TError, TData>(
    [queryName, queryVariables],
    async (): Promise<TQuery> => {
      const gqlQuery = gql`
        ${query}
      `

      const client_ = new GraphQLClient(endpoint, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json;charset=utf-8',
        },
      })
      try {
        const result = await client_.request<TQuery>(gqlQuery, queryVariables)
        return result
      } catch (error) {
        // alert(error)
        console.log(error)
      }

      return {} as TQuery
    },
    options,
  )

  return queryData
}
