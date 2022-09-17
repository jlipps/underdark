import arc from '@architect/functions'

export default function html({html}) {
  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-bells.jpg')}">
        <h1>Podcast</h1>
      </ud-hero>
      <ud-content>
        <article class="message is-info">
          <div class="message-header">
            <p>Coming Soon</p>
          </div>
          <div class="message-body">
            A podcast version of the stories contained in this site is being developed, and is almost ready to be released. Check back soon for links to the podcast on all your favourite podcast directories!
          </div>
        </article>
      </ud-content>
    </ud-layout>
  `
}
