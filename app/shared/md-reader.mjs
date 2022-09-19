import B from 'bluebird'
import fs from 'fs/promises'
import path from 'path'
import {fileURLToPath} from 'url'
import _glob from 'glob'
import { marked } from 'marked'
import frontMatter from 'front-matter'
import { singularize } from './utils.mjs'
import LRU from 'lru-cache'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const glob = B.promisify(_glob)
export const CONTENT_DIR = path.resolve(__dirname, '..', 'content')

const MAX_CACHE_SIZE = 64000000
let cache
let slugFileCache

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
  if (!cache) {
    cache = new LRU({
      maxSize: MAX_CACHE_SIZE,
      sizeCalculation: (value) => {
        return JSON.stringify(value).length
      }
    })
  }
  const key = `${type}-${mdFile}`
  let data = cache.get(key)
  if (!data) {
    data = await _parseMarkdown(mdFile, type)
    cache.set(key, data)
  }
  return data
}

async function _parseMarkdown(mdFile, type) {
  const fileData = await fs.readFile(mdFile, 'utf-8')
  const {attributes: metadata, body} = frontMatter(fileData)
  const mdHtml = marked.parse(body)
  metadata.slug = fileNameToSlug(mdFile)
  metadata.path = `/${type}/${metadata.slug}`

  if (metadata.date) {
    const date = new Date(metadata.date).toLocaleDateString('en-US', {dateStyle: 'medium'})
    metadata._date = metadata.date
    metadata.date = date
  }

  return {...metadata, html: mdHtml}
}

export async function getMarkdown(type, slug) {
  if (!slug) {
    throw new Error(`MD file slug must be defined`)
  }

  if (typeof slug !== 'string') {
    throw new Error(`Slug needs to be a string`)
  }

  if (!slugFileCache) {
    slugFileCache = new LRU({max: 1000})
  }

  const key = `${type}-${slug}`
  let mdFile = slugFileCache.get(key)
  if (!mdFile) {
    const MD_DIR = path.join(CONTENT_DIR, type)
    mdFile = (await glob(path.join(MD_DIR, '*.md'))).find((file) => {
      const fileSlug = fileNameToSlug(file)
      return fileSlug.toLowerCase() === slug.toLowerCase()
    })
    if (mdFile) {
      slugFileCache.set(key, mdFile)
    }
  }

  if (!mdFile) {
    throw new SlugNotFoundError(slug)
  }

  return parseMarkdown(mdFile, type)
}

export function getCache() {
  return cache
}
