import {findPods} from '../../shared/queries.mjs'
import {getFeedXml} from '../../shared/rss.mjs'

export async function get (/*req*/) {
  const xml = getFeedXml(await findPods())
  return {
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/xml; charset=utf-8',
    },
    xml
  }
}

export async function head(req) {
  const res = await get(req)
  res.headers['content-length'] = res.xml.length
  delete res.xml
  res.body = ''
  return res
}
