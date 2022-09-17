import {findEpisodes, compareEpisodesByNum} from '../shared/queries.mjs'

export async function get(/*req*/) {
  let episodes = await findEpisodes({}, compareEpisodesByNum)
  episodes = episodes.map((e) => e.episode)

  return {
    json: {episodes}
  }
}
