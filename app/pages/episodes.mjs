export default function Episode({html, state}) {
  return html`
    <ud-layout>
      <ud-hero slot="hero" img="/_static/img/hero-adventure-forest.jpg">
        <h1>All Episodes</h1>
      </ud-hero>

      <ud-content>
        <ud-episode-list></ud-episode-list>
      </ud-content>

    </ud-layout>
  `
}
