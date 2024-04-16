import { gql } from 'graphql-request'
import { endpoint } from './config'
import { retry } from './retry'
import { createClientRequest } from './client'
import { queryPokemon, querySpecificPokemon } from './querySchema'
import type { ParamsSearch } from "@interfaces/paramsSearch"

export async function searchForPokemon(filters: ParamsSearch): Promise<any> {
  return executeQuery(queryPokemon, filters);
}

export async function searchForSpecificPokemon(filters: ParamsSearch): Promise<any> {
  return executeQuery(querySpecificPokemon, filters);
}

async function executeQuery(queryFunction: (filters: ParamsSearch) => string, filters: ParamsSearch): Promise<any> {
  const query = gql`${queryFunction(filters)}`
  const client = createClientRequest(endpoint)

  const requestEndpoint = async () => {
    const data = await client.request(query)
    return data
  }

  try {
    const data = await retry(requestEndpoint);
    return data
  } catch (error: unknown) {
    if ((error as Error).message.startsWith('Seems the API is offline right now')) {
      throw 'Error: ' + (error as Error).message
    }
  }
}



