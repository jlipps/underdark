import {episodeGuard} from '../../shared/guards.mjs'
import {findEpisodes} from '../../shared/queries.mjs'

export async function get(req) {
  return await episodeGuard(req.params.slug, async (data) => {
    console.log(data)
    const allEpisodes = await findEpisodes({campaign: data.episode.campaign.slug})
    console.log(allEpisodes)
    data.nextEpisode = allEpisodes.find((e) => e.episode.episodeNum === data.episode.episodeNum + 1)
    data.prevEpisode = allEpisodes.find((e) => e.episode.episodeNum === data.episode.episodeNum - 1)
    return {json: {data}}
  })
}
