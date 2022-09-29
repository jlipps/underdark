import {findCampaigns, compareCampaignsByNum} from '../shared/queries.mjs'

export async function get(/*req*/) {
  const campaigns = await findCampaigns({}, compareCampaignsByNum)
  return {
    json: {campaigns, title: 'Campaigns'}
  }
}
