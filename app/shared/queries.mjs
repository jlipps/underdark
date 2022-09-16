import path from 'path'
import {glob, parseMarkdown, CONTENT_DIR, hydrateEpisode} from './md-reader.mjs'

export async function findEpisodes({id, episodeNum, campaign, author, title} = {}) {
  const episodeDir = path.join(CONTENT_DIR, 'episodes')
  const mdFiles = await glob(path.join(episodeDir, '*.md'))
  const found = []
  for (const mdFile of mdFiles) {
    const data = await parseMarkdown(mdFile, 'episodes')
    const {episode} = data
    if (
      (id !== undefined && episode.id !== id) ||
      (episodeNum !== undefined && episode.episodeNum !== episodeNum) ||
      (campaign !== undefined && episode.campaign !== campaign) ||
      (author !== undefined && episode.author !== author) ||
      (title !== undefined && episode.title !== title)
    ) {
      continue
    }
    await hydrateEpisode(episode)
    found.push(data)
  }
  return found
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

