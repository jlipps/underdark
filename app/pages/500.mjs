export default function BadPage({html, state}) {
  const {attrs} = state
  const {error} = attrs
  return html`
    <ud-layout>
      <ud-hero slot="hero" img="/_static/img/hero-explosion.jpg">
        <h1 class="title has-text-white">500 - Internal Server Error</h1>
      </ud-hero>

      <article class="message is-danger">
        <div class="message-body">
          Something has gone wrong. You're not quite sure what. Is it you? Is it the spell book you found on the side of the path and inadvisedly decided to use? Whatever happened, it isn't good. You worry about the consequences of trying again, but we both know you're going to. But before you do, at least read the eldritch text written in flame, now almost fading in the darkness. It says: <code>${error}</code>.
        </div>
      </article>

    </ud-layout>
  `
}
