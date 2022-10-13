import {findPods} from '../../shared/queries.mjs'
import {getFeedXml} from '../../shared/rss.mjs'

export async function get (/*req*/) {
  const xml = getFeedXml(await findPods())
  return {
    headers: {
      'cache-control': 'no-cache'
    },
    xml
  }
}

export const head = get
