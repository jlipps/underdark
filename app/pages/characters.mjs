import arc from '@architect/functions'

export default function Character({html}) {
  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-sword.jpg')}">
        <h1>All Characters</h1>
      </ud-hero>

      <ud-content>
        <ud-character-list></ud-character-list>
      </ud-content>

    </ud-layout>
  `
}
