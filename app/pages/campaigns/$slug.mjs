// View documentation at: https://docs.begin.com
export default function html ({ html, state }) {
  const {store} = state
  const {data} = store
  const {html: mdHtml, campaign} = data
  const {name, episodes} = campaign

  const episodesHtml = episodes.map((e) => html`
    <li><a href="${e.path}">${e.title}</a></li>
  `)
  return html`
    <ud-layout>
      <ud-hero slot="hero" img="/_static/img/hero-map.jpg">
        <h1 class="title p-6">&nbsp;</h1>
      </ud-hero>

      <ud-markdown class="is-flex is-justify-content-center">
        <h1>${name}</h1>
        ${mdHtml}
        <h2>Episodes</h2>
        <ul>${episodesHtml.join('\n')}</ul>
      </ud-markdown>

    </ud-layout>
  `
}
