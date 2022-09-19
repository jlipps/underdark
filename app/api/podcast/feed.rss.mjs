import {findPods} from '../../shared/queries.mjs'
import {getFeedXml} from '../../shared/rss.mjs'

export async function get (/*req*/) {
  const body = getFeedXml(await findPods())
  return {
    headers: {
      'Content-type': 'application/xml'
    },
    body,
  }
}
