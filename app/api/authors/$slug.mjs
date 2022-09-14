import {authorGuard} from '../../shared/guards.mjs'

export async function get(req) {
  return await authorGuard(req.params.slug, (data) => {
    return {
      json: {data}
    }
  })
}
