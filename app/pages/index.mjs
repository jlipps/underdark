import arc from '@architect/functions'

export default function html({html}) {
  return html`
    <style>
      .box.podcast-callout {
        background-color: #eee;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
    </style>
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-cave.jpg')}">
        <img src="${arc.static('img/underdark-logo.png')}" />
      </ud-hero>

      <p class="block is-size-4 has-text-centered">Stories created by a group of
      friends while playing Dungeons &amp; Dragons</p>

      <div class="box podcast-callout mb-6 is-size-6 has-text-centered">
        <p class="mb-5">Listen to episodes now via the podcast, or explore the campaign and read all the stories here.</p>
        <ud-listen-list show-notes="true"></ud-listen-list>
      </div>

      <section class="columns">

        <ud-callout-box class="column" image="img/yvr.jpg">
          <a slot="title" href="/about">The Idea</a>
          <p>New to D&amp;D? Wondering why I am writing these things? Curious about how the group
          got together? Check out the <a href="/about">About</a> page.</p>
        </ud-callout-box>

        <ud-callout-box class="column" image="img/map-square.jpg">
          <a href="/campaigns/current" slot="title">The Campaign</a>
          <p>Get to know the background of the current campaign: what world are we playing in, and what
          was the hook that got our story going?</p>
        </ud-callout-box>
      </section>

      <section class="columns">
        <ud-callout-box class="column" image="img/sword-square.jpg">
          <a href="/characters" slot="title">The Characters</a>
          <p>Who is our story about? Learn a little bit of the backstory for each of the members of the
          party for the current campaign.</p>
        </ud-callout-box>

        <ud-callout-box class="column" image="img/forest-square.jpg">
          <a href="/episodes" slot="title">The Story</a>
          <p>Start reading the story at the beginning of the current campaign. Or, you can always jump
          in at the <a href="/episodes/latest">latest episode</a>...</p>
        </ud-callout-box>
      </section>
    </ud-layout>
  `
}
