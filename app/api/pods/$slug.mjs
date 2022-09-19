import {podGuard} from '../../shared/guards.mjs'

export async function get (req) {
  const slug = req.params.slug

  return await podGuard(slug, async (data) => {
    return {json: {data}}
  })
}

