const SNIPPET_LENGTH = 300

export function singularize(itemType) {
  return itemType.replace(/s$/, '')
}

export function getSnippet(text) {
  const snippet = stripTags(text).substring(0, SNIPPET_LENGTH)
  const lastSpace = snippet.lastIndexOf(' ')
  return snippet.substring(0, lastSpace) + '...'
}

export function stripTags(html) {
  return html.replace(/(<([^>]+)>)/gi, '')
}
