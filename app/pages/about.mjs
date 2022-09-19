import arc from '@architect/functions'

export default function html({html, state}) {
  const {store} = state
  const {page, author} = store
  const {html: mdHtml, title, image} = page
  const {html: authorHtml, image: authorImage} = author

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-books.jpg')}">
        <h1>About</h1>
      </ud-hero>

      <ud-content class="is-flex is-justify-content-center">
        <h1>${title}</h1>
        <figure class="image is-128x128"><img src="${arc.static(image)}" class="is-rounded" /></figure>
        ${mdHtml}

        <h1>About the Author</h1>
        <figure class="image is-128x128"><img src="${arc.static(authorImage)}" class="is-rounded" /></figure>
        ${authorHtml}
      </ud-content>

    </ud-layout>
  `
}
