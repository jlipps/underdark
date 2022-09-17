import {findCharacters} from '../shared/queries.mjs'

export async function get(/*req*/) {
  let characters = await findCharacters({})
  characters = characters.map((e) => e.character)

  return {
    json: {characters}
  }
}
