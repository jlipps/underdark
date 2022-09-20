import arc from '@architect/functions'
import {TWITTER_HANDLE, TITLE, IMAGE_RECT, HOMEPAGE, RSS_PATH} from './shared/constants.mjs'

const isProd = process.env.ARC_ENV === 'production'

export default function Head() {
  const desc = 'Stories, in summary, from our D&D campaigns'

  const gtagHtml = isProd ? `
    <!-- gtag start -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-27XNCYKFMQ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-27XNCYKFMQ');
    </script>
    <!-- gtag end -->
  ` : ''

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      ${gtagHtml}
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${TITLE}</title>
      <link rel="stylesheet" href="${arc.static('bulma.css')}">
      <link rel="stylesheet" href="${arc.static('underdark.css')}">
      <link rel="icon" href="${arc.static('img/favicon.ico')}">
      <link type="application/rss+xml" rel="alternate" title="${TITLE}" href="${HOMEPAGE}${RSS_PATH}"/>
      <script src="https://kit.fontawesome.com/abff5eacda.js" crossorigin="anonymous"></script>

      <meta name="description" content="${desc}" />

      <!-- Twitter -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="${TWITTER_HANDLE}">
      <meta name="twitter:title" content="${TITLE}">
      <meta name="twitter:description" content="${desc}">
      <meta name="twitter:creator" content="${TWITTER_HANDLE}">
      <meta name="twitter:image" content="${HOMEPAGE}${IMAGE_RECT}">

      <!-- Open Graph -->
      <meta property="og:title" content="${TITLE}" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="${HOMEPAGE}" />
      <meta property="og:image" content="${HOMEPAGE}${IMAGE_RECT}" />
      <meta property="og:description" content="${desc}" />
      <meta property="og:site_name" content="Notes from the Underdark" />
    </head>
  `
}
