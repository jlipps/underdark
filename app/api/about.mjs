import {contentGuard} from '../shared/guards.mjs'

export async function get(req) {
  return await contentGuard('pages', 'about', async (data) => {
    return await contentGuard('authors', 'jlipps', (authorData) => {
      return {
        json: {data, authorData}
      }
    })
  })
}
