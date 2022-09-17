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
      location: allEpisodes[0].episode.path,
      json: {data: allEpisodes[0]}
    }
  }

  return await episodeGuard(slug, async (data) => {
    const allEpisodes = await findEpisodes({campaign: data.episode.campaign.slug})
    data.nextEpisode = allEpisodes.find((e) => e.episode.episodeNum === data.episode.episodeNum + 1)
    data.prevEpisode = allEpisodes.find((e) => e.episode.episodeNum === data.episode.episodeNum - 1)
    return {json: {data}}
  })
}
