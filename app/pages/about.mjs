export default function html({html, state}) {
  const {store} = state
  const {data, authorData} = store
  const {html: mdHtml, metadata} = data
  const {html: authorHtml, metadata: authorMetadata} = authorData

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="/_static/img/hero-books.jpg">
        <h1>About</h1>
      </ud-hero>

      <ud-content class="is-flex is-justify-content-center">
        <h1>${metadata.title}</h1>
        <figure class="image is-128x128"><img src="${metadata.image}" class="is-rounded" /></figure>
        ${mdHtml}

        <h1>About the Author</h1>
        <figure class="image is-128x128"><img src="${authorMetadata.image}" class="is-rounded" /></figure>
        ${authorHtml}
      </ud-content>

    </ud-layout>
  `
}
