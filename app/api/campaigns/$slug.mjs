import {campaignGuard} from '../../shared/guards.mjs'
import {findEpisodes, compareEpisodesByNum} from '../../shared/queries.mjs'

export async function get (req) {
  const slug = req.params.slug

  return await campaignGuard(slug, async (data) => {
    const episodes = (await findEpisodes({campaign: slug}))
    episodes.sort(compareEpisodesByNum).reverse()
    return {json: {data, episodes: episodes.map(e => e.episode)}}
  })
}
