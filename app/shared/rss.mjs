import xb2 from 'xmlbuilder2'
import {stripTags} from './utils.mjs'
import {TITLE, OWNER_EMAIL, AUTHOR, POD_DESC, IMAGE_SQ, LANG, HOMEPAGE} from './constants.mjs'

export function getFeedXml (pods) {
  const item = pods.map((pod) => {
    const {title, season, type, url, slug, _date, mp3bytes, durationSecs, html, episode} = pod
    const {episodeNum} = episode
    const item = {
      title,
      description: {
        '$': html,
      },
      pubDate: new Date(_date).toUTCString(),
      enclosure: {
        '@url': url,
        '@type': 'audio/mpeg',
        '@length': mp3bytes,
      },
      'itunes:duration': durationSecs,
      'itunes:episodeType': type,
      'itunes:season': season,
      guid: {
        '@isPermalink': 'false',
        '#': slug,
      }
    }
    if (type !== 'trailer') {
      item['itunes:episode'] = episodeNum
    }
    return item
  })

  const obj = {
    rss: {
      '@version': '2.0',
      '@xmlns:itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
      '@xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
      channel: {
        title: TITLE,
        'itunes:owner': {
          'itunes:name': 'Jonathan Lipps',
          'itunes:email': OWNER_EMAIL,
        },
        'itunes:author': AUTHOR,
        description: {
          '$': POD_DESC,
        },
        'itunes:summary': stripTags(POD_DESC),
        'itunes:image': {
          '@href': HOMEPAGE + IMAGE_SQ,
        },
        'itunes:category': {
          '@text': 'Games &amp; Hobbies',
        },
        'itunes:type': 'serial',
        'itunes:explicit': 'false',
        language: LANG,
        link: HOMEPAGE,
        item,
        copyright: 'Copyright 2022 Jonathan Lipps',
      }
    }
  }

  const doc = xb2.create(obj)
  const xml = doc.end({prettyPrint: true})
  return xml.replace('<?xml version="1.0"?>', '<?xml version="1.0" encoding="UTF-8"?>')
}

