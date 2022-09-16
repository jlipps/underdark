export default function html({html, state}) {
  const {store} = state
  const {data} = store
  const {html: mdHtml, metadata} = data

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="/_static/img/hero-books.jpg">
        <h1>About</h1>
      </ud-hero>

      <ud-content class="is-flex is-justify-content-center">${mdHtml}</ud-content>

    </ud-layout>
  `
}
