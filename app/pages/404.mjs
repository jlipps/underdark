import arc from '@architect/functions'

export default function html({html}) {
  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-dark-forest.jpg')}">
        <h1>404 - Not Found</h1>
      </ud-hero>

      <article class="message is-danger">
        <div class="message-body">
          You have wandered into a forest and gotten lost. It's getting dark. You're starting to feel a strange sleepiness, and begin to forget what it is you were looking for. Quick, turn around and retrace your steps before all hope is lost!
        </div>
      </article>

    </ud-layout>
  `
}
