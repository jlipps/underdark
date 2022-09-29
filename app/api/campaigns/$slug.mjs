import {campaignGuard} from '../../shared/guards.mjs'
import {findCampaigns, compareCampaignsByNum} from '../../shared/queries.mjs'

export async function get (req) {
  const slug = req.params.slug

  if (slug === 'current') {
    const campaigns = await findCampaigns({}, compareCampaignsByNum)
    return {
      location: campaigns[0].path,
    }
  }

  return await campaignGuard(slug, async (campaign) => {
    campaign.episodes.reverse()
    return {
      json: {
        title: campaign.name,
        campaign,
        episodes: campaign.episodes,
        characters: campaign.characters,
      }
    }
  })
}
