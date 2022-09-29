import {characterGuard} from '../../shared/guards.mjs'

export async function get (req) {
  return await characterGuard(req.params.slug, (character) => ({json: {character, title: character.name}}))
}
