import {episodeGuard} from '../../shared/guards.mjs'
import {findEpisodes, compareEpisodesByNum} from '../../shared/queries.mjs'

export async function get(req) {
  const slug = req.params.slug

  if (slug === 'latest') {
    const allEpisodes = await findEpisodes({}, compareEpisodesByNum)
    if (allEpisodes.length === 0) {
      return {
        statusCode: 404,
        json: {}
      }
    }

    return {
      location: allEpisodes[0].path,
    }
  }

  return await episodeGuard(slug, async (episode) => {
    const allEpisodes = await findEpisodes({campaign: episode.campaign.slug})
    const nextEpisode = allEpisodes.find((e) => e.episodeNum === episode.episodeNum + 1)
    const prevEpisode = allEpisodes.find((e) => e.episodeNum === episode.episodeNum - 1)
    return {json: {episode, nextEpisode, prevEpisode}}
  })
}
