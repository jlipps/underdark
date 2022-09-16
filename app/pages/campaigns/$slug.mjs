export default function html ({html, state}) {
  const {store} = state
  const {data} = store
  const {html: mdHtml, campaign} = data
  const {name} = campaign

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="/_static/img/hero-map.jpg">
        <h1>Campaign</h1>
      </ud-hero>

      <ud-content class="is-flex is-justify-content-center">
        <h1>${name}</h1>
        ${mdHtml}
        <h2>Episodes</h2>
        <ud-episode-list></ud-episode-list>
      </ud-content>

    </ud-layout>
  `
}
