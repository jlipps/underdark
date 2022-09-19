import {findCharacters} from '../shared/queries.mjs'

export async function get(/*req*/) {
  const characters = await findCharacters({})
  return {
    json: {characters}
  }
}
