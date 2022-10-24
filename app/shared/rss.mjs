import xb2 from 'xmlbuilder2'
import {stripTags} from './utils.mjs'
import {TITLE, OWNER_EMAIL, AUTHOR, POD_DESC, POD_IMG, LANG, HOMEPAGE} from './constants.mjs'

export function getFeedXml (pods) {
  const item = pods.map((pod) => {
    const {title, season, type, url, slug, _date, mp3bytes, durationSecs, html, episode} = pod
    const {episodeNum} = episode
    const item = {
      title,
      link: `${HOMEPAGE}/pods/${slug}`,
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
        '@isPermaLink': 'false',
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
        description: stripTags(POD_DESC),
        'itunes:summary': stripTags(POD_DESC),
        'itunes:image': {
          '@href': HOMEPAGE + POD_IMG,
        },
        'itunes:category': [{
          '@text': 'Fiction',
          'itunes:category': {
            '@text': 'Science Fiction',
          }
        }, {
          '@text': 'Leisure',
          'itunes:category': {
            '@text': 'Games',
          }
        }],
        'itunes:type': 'serial',
        'itunes:explicit': 'no',
        language: LANG,
        link: HOMEPAGE,
        item,
        copyright: 'Copyright 2022 Jonathan Lipps',
      }
    }
  }

  const doc = xb2.create(obj)
  const xml = doc.end({prettyPrint: true})
  return xml.replace('<?xml version="1.0"?>', '<?xml version="1.0" encoding="utf-8"?>')
}

