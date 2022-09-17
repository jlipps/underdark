import {characterGuard} from '../../shared/guards.mjs'

export async function get (req) {
  const slug = req.params.slug

  return await characterGuard(slug, (data) => {
    return {json: {data}}
  })
}
