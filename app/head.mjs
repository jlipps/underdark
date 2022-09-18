import arc from '@architect/functions'

export default function Head(req={}) {
  const { path, session } = req
  const title = `Notes from the Underdark`
  const desc = 'Stories, in summary, from our D&D campaigns'
  const twitter = '@underdark_notes'
  const socialImg = arc.static('img/underdark-logo-on-bg.jpg')
  const url = 'https://underdark.quest'
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link rel="stylesheet" href="${arc.static('bulma.css')}">
      <link rel="stylesheet" href="${arc.static('underdark.css')}">
      <link rel="icon" href="${arc.static('img/favicon.ico')}">
      <script src="https://kit.fontawesome.com/abff5eacda.js" crossorigin="anonymous"></script>

      <meta name="description" content="${desc}" />

      <!-- Twitter Card data -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="${twitter}">
      <meta name="twitter:title" content="${title}">
      <meta name="twitter:description" content="${desc}">
      <meta name="twitter:creator" content="${twitter}">
      <-- Twitter Summary card images must be at least 120x120px -->
      <meta name="twitter:image" content="${url}${socialImg}">

      <!-- Open Graph data -->
      <meta property="og:title" content="${title}" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="${url}" />
      <meta property="og:image" content="${url}${socialImg}" />
      <meta property="og:description" content="${desc}" />
      <meta property="og:site_name" content="Notes from the Underdark" />
    </head>
  `
}
