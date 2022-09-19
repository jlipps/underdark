import arc from '@architect/functions'

export default function html ({html, state}) {
  const {store} = state
  const {campaign} = store
  const {name, image, html: mdHtml} = campaign

  let imageHtml = ''
  if (image) {
    imageHtml = html`
      <figure class="image is-128x128"><img src="${arc.static(image)}" class="is-rounded" /></figure>
    `
  }

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-map.jpg')}">
        <h1>Campaign</h1>
      </ud-hero>

      <ud-content class="is-flex is-justify-content-center">
        <h1>${name}</h1>
        ${imageHtml}
        ${mdHtml}
        <h2>Characters</h2>
        <ud-character-list></ud-character-list>
        <h2>Episodes</h2>
        <ud-episode-list></ud-episode-list>
      </ud-content>

    </ud-layout>
  `
}
