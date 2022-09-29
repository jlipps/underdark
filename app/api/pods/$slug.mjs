import {podGuard} from '../../shared/guards.mjs'
import {findPods} from '../../shared/queries.mjs'

export async function get (req) {
  return await podGuard(req.params.slug, async (pod) => {
    const podsForSeason = (await findPods()).filter((p) => p.campaign.slug === pod.campaign.slug)
    const nextEpisode = podsForSeason.find((p) => p.episode.episodeNum === pod.episode.episodeNum + 1)
    const prevEpisode = podsForSeason.find((p) => p.episode.episodeNum === pod.episode.episodeNum - 1)
    return {json: {pod, nextEpisode, prevEpisode, title: pod.title}}
  })
}

