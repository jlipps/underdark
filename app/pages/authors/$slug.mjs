export default function html({html, state}) {
  const {store} = state
  const {data} = store
  const {metadata, html: contentHtml} = data
  const {name, image} = metadata
  return html`
    <ud-layout>
      <ud-hero slot="hero" img="/_static/img/hero-typewriter.jpg">
        <h1>Author</h1>
      </ud-hero>
      <ud-content>
        <h1 class="title">${name}</h1>
        <figure class="image is-128x128"><img src="${image}" class="is-rounded" /></figure>
        <div class="content">
          ${contentHtml}
        </div>
      </ud-content>
    </ud-layout>
  `
}
