import {contentGuard} from '../shared/guards.mjs'

export async function get(req) {
  return await contentGuard('pages', 'about', (data) => {
    return {
      json: {data}
    }
  })
}
