import {findEpisodes, compareEpisodesByNum} from '../shared/queries.mjs'

const SNIPPET_LENGTH = 300

export async function get(/*req*/) {
  let episodes = await findEpisodes()
  episodes.sort(compareEpisodesByNum)
  episodes = episodes.map((e) => {
    e.episode.snippet = e.html.replace(/(<([^>]+)>)/gi, '').substring(0, SNIPPET_LENGTH)
    const lastSpace = e.episode.snippet.lastIndexOf(' ')
    e.episode.snippet = e.episode.snippet.substring(0, lastSpace) + '...'
    return e.episode
  })

  return {
    json: {episodes}
  }
}
