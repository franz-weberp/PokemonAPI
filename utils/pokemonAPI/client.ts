import { GraphQLClient } from 'graphql-request'

export function createClientRequest(endpoint: string): GraphQLClient {
  const clientRequest = new GraphQLClient(endpoint, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Encoding': 'gzip'
    },
  })

  return clientRequest
}