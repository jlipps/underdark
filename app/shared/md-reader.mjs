import B from 'bluebird'
import fs from 'fs/promises'
import path from 'path'
import {fileURLToPath} from 'url'
import _glob from 'glob'
import { marked } from 'marked'
import frontMatter from 'front-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const glob = B.promisify(_glob)
export const CONTENT_DIR = path.resolve(__dirname, '..', 'content')

const SNIPPET_LENGTH = 300

export class SlugNotFoundError extends Error {
  constructor(slug) {
    super(`Could not find content file matching slug '${slug}'`)
  }
}

export function fileNameToSlug(file) {
  const fileName = path.basename(file)
  return fileName.replace(/^[0-9]+-/, '').replace(/\.md$/, '')
}

export async function parseMarkdown(mdFile, type) {
  const fileData = await fs.readFile(mdFile, 'utf-8')
  const {attributes: metadata, body} = frontMatter(fileData)
  const mdHtml = marked.parse(body)
  metadata.slug = fileNameToSlug(mdFile)
  metadata.path = `/${type}/${metadata.slug}`
  const singularType = type.replace(/s$/, '')

  if (metadata.date) {
    const date = new Date(metadata.date).toLocaleDateString('en-US', {dateStyle: 'medium'})
    metadata._date = metadata.date
    metadata.date = date
  }

  return {
    metadata,
    [singularType]: metadata,
    html: mdHtml,
  }
}

export async function getMarkdown(type, slug) {
  if (!slug) {
    throw new Error(`MD file slug must be defined`)
  }

  const MD_DIR = path.join(CONTENT_DIR, type)
  const mdFile = (await glob(path.join(MD_DIR, '*.md'))).find((file) => {
    const fileSlug = fileNameToSlug(file)
    return fileSlug.toLowerCase() === slug.toLowerCase()
  })

  if (!mdFile) {
    throw new SlugNotFoundError(slug)
  }

  return parseMarkdown(mdFile, type)

}

export async function getEpisode(slug) {
  return await getMarkdown('episodes', slug)
}

export async function getCampaign(slug) {
  return await getMarkdown('campaigns', slug)
}

export async function getAuthor(slug) {
  return await getMarkdown('authors', slug)
}

export async function hydrateEpisode({episode, html}) {
  const campaignData = await getCampaign(episode.campaign)
  const authorData = await getAuthor(episode.author)
  episode.campaign = campaignData.campaign
  episode.author = authorData.author
  episode.snippet = html.replace(/(<([^>]+)>)/gi, '').substring(0, SNIPPET_LENGTH)
  const lastSpace = episode.snippet.lastIndexOf(' ')
  episode.snippet = episode.snippet.substring(0, lastSpace) + '...'
  return episode
}
