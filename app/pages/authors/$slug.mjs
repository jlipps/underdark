import arc from '@architect/functions'

export default function html({html, state}) {
  const {store} = state
  const {author} = store
  const {name, image, html: mdHtml} = author
  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-typewriter.jpg')}">
        <h1>Author</h1>
      </ud-hero>
      <ud-content>
        <h1 class="title">${name}</h1>
        <figure class="image is-128x128"><img src="${arc.static(image)}" class="is-rounded" /></figure>
        <div class="content">
          ${mdHtml}
        </div>
      </ud-content>
    </ud-layout>
  `
}
