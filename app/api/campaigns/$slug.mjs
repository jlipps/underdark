import {campaignGuard} from '../../shared/guards.mjs'
import {findEpisodes, compareEpisodesByNum, findCampaigns, findCharacters, compareCampaignsByNum} from '../../shared/queries.mjs'

export async function get (req) {
  const slug = req.params.slug

  if (slug === 'current') {
    const campaigns = await findCampaigns({}, compareCampaignsByNum)
    return {
      location: campaigns[0].campaign.path,
      json: {data: campaigns[0]}
    }
  }

  return await campaignGuard(slug, async (data) => {
    const episodes = await findEpisodes({campaign: slug}, compareEpisodesByNum)
    episodes.reverse()
    const characters = await findCharacters({campaign: slug})
    return {json: {
      data,
      episodes: episodes.map(e => e.episode),
      characters: characters.map(c => c.character),
    }}
  })
}
