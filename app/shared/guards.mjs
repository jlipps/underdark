import {getMarkdown, SlugNotFoundError} from './md-reader.mjs'
import {hydrateEpisode, hydrateCharacter} from './queries.mjs'

export async function contentGuard(contentType, slug, innerFn) {
  try {
    const data = await getMarkdown(contentType, slug)
    return await innerFn(data)
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
  return await contentGuard('episodes', slug, async (data) => {
    await hydrateEpisode(data)
    return await innerFn(data)
  })
}

export async function campaignGuard(slug, innerFn) {
  return await contentGuard('campaigns', slug, innerFn)
}

export async function characterGuard(slug, innerFn) {
  return await contentGuard('characters', slug, async (data) => {
    await hydrateCharacter(data)
    return await innerFn(data)
  })
}
