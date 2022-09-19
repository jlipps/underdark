import {SlugNotFoundError} from './md-reader.mjs'
import {getItem} from './queries.mjs'

export async function contentGuard(contentType, slug, innerFn) {
  try {
    const item = await getItem(contentType, slug)
    return await innerFn(item)
  } catch (err) {
    if (err instanceof SlugNotFoundError) {
      return {
        statusCode: 404,
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

export async function characterGuard(slug, innerFn) {
  return await contentGuard('characters', slug, innerFn)
}

export async function podGuard(slug, innerFn) {
  return await contentGuard('pods', slug, innerFn)
}
