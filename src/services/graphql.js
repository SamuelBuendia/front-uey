import axios from 'axios'
import { print } from 'graphql'

export const fetchGraphQL = async (query, variables) => {
  const result = await axios.post('http://localhost:4000/grapqhql', {
    query: print(query),
    variables
  })
  return result.data
}
