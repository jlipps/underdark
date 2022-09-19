import arc from '@architect/functions'

export default function html({html, state}) {
  const {store} = state
  const {data, authorData} = store
  const {html: mdHtml, page} = data
  const {html: authorHtml, author} = authorData

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-books.jpg')}">
        <h1>About</h1>
      </ud-hero>

      <ud-content class="is-flex is-justify-content-center">
        <h1>${page.title}</h1>
        <figure class="image is-128x128"><img src="${arc.static(page.image)}" class="is-rounded" /></figure>
        ${mdHtml}

        <h1>About the Author</h1>
        <figure class="image is-128x128"><img src="${arc.static(author.image)}" class="is-rounded" /></figure>
        ${authorHtml}
      </ud-content>

    </ud-layout>
  `
}
