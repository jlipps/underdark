import path from 'path'
import {glob, parseMarkdown, getCampaign, getAuthor, CONTENT_DIR} from './md-reader.mjs'
import {singularize, getSnippet} from './utils.mjs'

export async function findItems(itemType, specs, comparator) {
  const itemDir = path.join(CONTENT_DIR, itemType)
  const mdFiles = await glob(path.join(itemDir, '*.md'))
  const found = []
  checkLoop: for (const mdFile of mdFiles) {
    const data = await parseMarkdown(mdFile, itemType)
    const item = data[singularize(itemType)]
    for (const spec of Object.keys(specs)) {
      if (specs[spec] !== undefined && item[spec] !== specs[spec]) {
        continue checkLoop
      }
    }
    await hydrateItem(itemType, data)
    found.push(data)
  }
  if (comparator) {
    found.sort(comparator)
  }
  return found
}

export async function findEpisodes(specs = {}, comparator) {
  return await findItems('episodes', specs, comparator)
}

export async function findCampaigns(specs = {}, comparator) {
  return await findItems('campaigns', specs, comparator)
}

export function compareEpisodesByNum(a, b) {
  if (a.episode.episodeNum < b.episode.episodeNum) {
    return 1
  }
  if (a.episode.episodeNum > b.episode.episodeNum) {
    return -1
  }
  return 0
}

export function compareCampaignsByNum(a, b) {
  if (a.campaign.campaignNum < b.campaign.campaignNum) {
    return 1
  }
  if (a.campaign.campaignNum > b.campaign.campaignNum) {
    return -1
  }
  return 0
}

export async function hydrateEpisode({episode, html}) {
  const campaignData = await getCampaign(episode.campaign)
  const authorData = await getAuthor(episode.author)
  episode.campaign = campaignData.campaign
  episode.author = authorData.author
  episode.snippet = getSnippet(html)
  return episode
}

export async function hydrateCampaign({campaign, html}) {
  campaign.episodes = await findEpisodes({campaign: campaign.slug}, compareEpisodesByNum)
  campaign.snippet = getSnippet(html)
  return campaign
}

export async function hydrateItem(itemType, data) {
  if (itemType === 'episodes') {
    return await hydrateEpisode(data)
  } else if (itemType == 'campaigns') {
    return await hydrateCampaign(data)
  }
}
