import {campaignGuard} from '../../shared/guards.mjs'
import {findEpisodes} from '../../shared/queries.mjs'

export async function get (req) {
  const slug = req.params.slug

  return await campaignGuard(slug, async (data) => {
    const episodes = (await findEpisodes({campaign: slug})).map((e) => e.episode)
    data.campaign.episodes = episodes
    return {json: {data}}
  })
}
