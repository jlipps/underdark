import {findPods} from '../../shared/queries.mjs'
import {getFeedXml} from '../../shared/rss.mjs'

export async function get (/*req*/) {
  const xml = getFeedXml(await findPods())
  return {xml}
}
