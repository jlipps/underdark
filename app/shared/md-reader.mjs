import B from 'bluebird'
import fs from 'fs/promises'
import path from 'path'
import {fileURLToPath} from 'url'
import _glob from 'glob'
import { marked } from 'marked'
import frontMatter from 'front-matter'
import { singularize } from './utils.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const glob = B.promisify(_glob)
export const CONTENT_DIR = path.resolve(__dirname, '..', 'content')

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
  const singularType = singularize(type)

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

export async function getCharacter(slug) {
  return await getMarkdown('characters', slug)
}
