import {findEpisodes, compareEpisodesByNum} from '../shared/queries.mjs'

export async function get(/*req*/) {
  let episodes = await findEpisodes({}, compareEpisodesByNum)
  return {
    json: {episodes, title: 'Episodes'}
  }
}
