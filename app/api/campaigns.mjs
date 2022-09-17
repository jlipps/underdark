import {findCampaigns, compareCampaignsByNum} from '../shared/queries.mjs'

export async function get(/*req*/) {
  let campaigns = await findCampaigns({}, compareCampaignsByNum)
  campaigns = campaigns.map((c) => c.campaign)

  return {
    json: {campaigns}
  }
}
