export default function html({html, state}) {
  const {store} = state
  const {data} = store
  const {metadata, html: contentHtml} = data
  const {name} = metadata
  return html`
    <ud-layout>
      <h1 class="title">${name}</h1>
      <div class="content">
        ${contentHtml}
      </div>
    </ud-layout>
  `
}
