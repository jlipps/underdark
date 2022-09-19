import path from 'path'
import {glob, getMarkdown, parseMarkdown, CONTENT_DIR} from './md-reader.mjs'
import {getSnippet} from './utils.mjs'

export async function getItem(itemType, slug) {
  const data = await getMarkdown(itemType, slug)
  await hydrateItem(itemType, data)
  return data
}

export async function getEpisode(slug) {
  return await getItem('episodes', slug)
}

export async function getCampaign(slug) {
  return await getItem('campaigns', slug)
}

export async function getAuthor(slug) {
  return await getItem('authors', slug)
}

export async function getCharacter(slug) {
  return await getItem('characters', slug)
}

export async function getPod(slug) {
  return await getItem('pods', slug)
}

export async function findItems(itemType, specs, comparator) {
  const itemDir = path.join(CONTENT_DIR, itemType)
  const mdFiles = await glob(path.join(itemDir, '*.md'))
  const found = []
  checkLoop: for (const mdFile of mdFiles) {
    const item = await parseMarkdown(mdFile, itemType)
    for (const spec of Object.keys(specs)) {
      if (specs[spec] !== undefined && item[spec] !== specs[spec]) {
        continue checkLoop
      }
    }
    await hydrateItem(itemType, item)
    found.push(item)
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

export async function findCharacters(specs = {}, comparator) {
  return await findItems('characters', specs, comparator)
}

export async function findPods(specs = {}, comparator) {
  return await findItems('pods', specs, comparator)
}

export function compareEpisodesByNum(a, b) {
  return a.episodeNum < b.episodeNum ? 1 :
    (a.episodeNum > b.episodeNum ? -1 :
      0)
}

export function compareCampaignsByNum(a, b) {
  return a.campaignNum < b.campaignNum ? 1 :
    (a.campaignNum > b.campaignNum ? -1 :
      0)
}

export function comparePodsByNum(a, b) {
  return a.pod.podNum < b.pod.podNum ? 1 :
    a.pod.podNum > b.pod.podNum ? -1 :
      0
}

export async function hydrateEpisode(episode) {
  episode.campaign = await getCampaign(episode.campaign)
  episode.author = await getAuthor(episode.author)
  episode.snippet = getSnippet(episode.html)
  if (episode.pod) {
    episode.pod = await getPod(episode.pod)
  }
  return episode
}

export async function hydrateCharacter(character) {
  character.campaign = await getCampaign(character.campaign)
  character.snippet = getSnippet(character.html)
  return character
}


export async function hydrateCampaign(campaign) {
  campaign.episodes = await findEpisodes({campaign: campaign.slug}, compareEpisodesByNum)
  campaign.characters = await findCharacters({campaign: campaign.slug})
  campaign.snippet = getSnippet(campaign.html)
  return campaign
}

export async function hydratePod(pod) {
  pod.episode = await getEpisode(pod.episode)
  pod.campaign = await getCampaign(pod.episode.campaign.slug)
  pod.snippet = getSnippet(pod.html)
  return pod
}

export async function hydrateItem(itemType, data) {
  if (data._hydrated) {
    return data
  }
  data._hydrated = true
  if (itemType === 'episodes') {
    return await hydrateEpisode(data)
  } else if (itemType === 'campaigns') {
    return await hydrateCampaign(data)
  } else if (itemType === 'characters') {
    return await hydrateCharacter(data)
  } else if (itemType === 'pods') {
    return await hydratePod(data)
  }
}
