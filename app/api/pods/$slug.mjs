import {podGuard} from '../../shared/guards.mjs'

export async function get (req) {
  return await podGuard(req.params.slug, async (pod) => ({json: {pod}}))
}

