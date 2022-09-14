import B from 'bluebird'
import fs from 'fs/promises'
import path from 'path'
import {fileURLToPath} from 'url'
import glob from 'glob'
import { marked } from 'marked'
import frontMatter from 'front-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = path.resolve(__dirname, '..', 'content')

export class SlugNotFoundError extends Error {
  constructor(slug) {
    super(`Could not find content file matching slug '${slug}'`)
  }
}

export async function getMarkdown(type, slug) {
  if (!slug) {
    throw new Error(`MD file slug must be defined`)
  }

  const MD_DIR = path.join(CONTENT_DIR, type)
  const mdFile = (await B.promisify(glob)(path.join(MD_DIR, '*.md'))).find((file) => {
    const fileName = path.basename(file)
    const fileSlug = fileName.replace(/^[0-9]+-/, '').replace(/\.md$/, '')
    return fileSlug.toLowerCase() === slug.toLowerCase()
  })

  if (!mdFile) {
    throw new SlugNotFoundError(slug)
  }

  const fileData = await fs.readFile(mdFile, 'utf-8')
  const {attributes: metadata, body} = frontMatter(fileData)
  const mdHtml = marked.parse(body)

  return {
    metadata,
    html: mdHtml,
  }
}
