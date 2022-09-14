import {getMarkdown, SlugNotFoundError} from './md-reader.mjs'

export async function contentGuard(contentType, slug, innerFn) {
  try {
    const data = await getMarkdown(contentType, slug)
    return await innerFn(data)
  } catch (err) {
    if (err instanceof SlugNotFoundError) {
      return {
        statusCode: 400,
        json: {}
      }
    }
    throw err
  }
}

export async function authorGuard(slug, innerFn) {
  return await contentGuard('authors', slug, innerFn)
}

export async function episodeGuard(slug, innerFn) {
  return await contentGuard('episodes', slug, innerFn)
}

export async function campaignGuard(slug, innerFn) {
  return await contentGuard('campaigns', slug, innerFn)
}
