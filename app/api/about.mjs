import {contentGuard} from '../shared/guards.mjs'

export async function get(/*req*/) {
  return await contentGuard('pages', 'about', async (page) => {
    return await contentGuard('authors', 'jlipps', (author) => {
      return {
        json: {page, author}
      }
    })
  })
}
