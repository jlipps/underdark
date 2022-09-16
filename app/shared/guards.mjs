import {getMarkdown, SlugNotFoundError} from './md-reader.mjs'

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
    return {
      statusCode: 500,
      json: {},
    }
  }
}

export async function authorGuard(slug, innerFn) {
  return await contentGuard('authors', slug, innerFn)
}

export async function episodeGuard(slug, innerFn) {
  return await contentGuard('episodes', slug, async (data) => {
    return await campaignGuard(data.metadata.campaign, async (campaignData) => {
      data.episode.campaign = campaignData.campaign
      return await authorGuard(data.metadata.author, async (authorData) => {
        data.episode.author = authorData.author
        return await innerFn(data)
      })
    })
  })
}

export async function campaignGuard(slug, innerFn) {
  return await contentGuard('campaigns', slug, innerFn)
}
