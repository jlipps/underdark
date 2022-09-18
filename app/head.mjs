import arc from '@architect/functions'

export default function Head(req={}) {
  const { path, session } = req
  const title = `Notes from the Underdark`
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
    </head>
  `
}
