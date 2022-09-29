import {authorGuard} from '../../shared/guards.mjs'

export async function get(req) {
  return await authorGuard(req.params.slug, (author) => ({
    json: {
      author,
      title: author.name,
    }
  }))
}
