import {findPods} from '../../shared/queries.mjs'
import {stripTags} from '../../shared/utils.mjs'
import {TITLE, OWNER_EMAIL, AUTHOR, POD_DESC, IMAGE_SQ, LANG, HOMEPAGE} from '../../shared/constants.mjs'
import xb2 from 'xmlbuilder2'

function getFeedXml (pods) {
  const item = pods.map((pod) => {
    const {title, url, slug, _date, mp3bytes, duration, html} = pod
    return {
      title,
      description: stripTags(html),
      pubDate: new Date(_date).toUTCString(),
      enclosure: {
        '@url': url,
        '@type': 'audio/mpeg',
        '@length': mp3bytes,
      },
      'itunes:duration': duration,
      guid: {
        '@isPermalink': 'false',
        '#': slug,
      }
    }
  })
  const obj = {
    rss: {
      '@version': '2.0',
      '@xmlns:itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
      '@xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
      channel: {
        title: TITLE,
        'itunes:owner': {
          'itunes:email': OWNER_EMAIL,
        },
        'itunes:author': AUTHOR,
        description: POD_DESC,
        'itunes:summary': POD_DESC,
        'itunes:image': {
          '@href': HOMEPAGE + IMAGE_SQ,
        },
        'itunes:category': {
          '@text': 'Games &amp; Hobbies',
        },
        language: LANG,
        link: HOMEPAGE,
        item,
      }
    }
  }

  const doc = xb2.create(obj)
  return doc.end({prettyPrint: true})
}

export async function get (/*req*/) {
  const body = getFeedXml(await findPods())
  return {
    headers: {
      'Content-type': 'application/xml'
    },
    body,
  }
}
