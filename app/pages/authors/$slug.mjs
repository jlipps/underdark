export default function html({html, state}) {
  const {store} = state
  const {data} = store
  const {metadata, html: contentHtml} = data
  return html`
    ${contentHtml}
  `
}
