import arc from '@architect/functions'

export default function Campaigns({html, state}) {
  const {store} = state
  const {campaigns} = store
  const campaignBlocks = campaigns.map((c) => {
    const {path, name, snippet, image, episodes, characters} = c
    const latest = episodes[0]
    return html`
      <article class="media">
        <ud-thumbnail image="${image}" text="${name[0]}"></ud-thumbnail>
        <div class="media-content">
          <div class="content">
            <h4><a href="${path}">${name}</a></h4>
            <div class="tags">
              <span class="tag is-light">${episodes.length} episodes</span>
              <span class="tag is-light">${characters.length} player characters</span>
              <span class="tag is-light">Latest episode:&nbsp;<a href="${latest.path}">${latest.title}</a></span>
              <span class="tag is-light">Updated ${latest.date}</span>
            </div>
            <div>${snippet}</div>
          </div>
        </div>
      </article>
    `
  })

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-map.jpg')}">
        <h1>All Campaigns</h1>
      </ud-hero>

      <ud-content>
        ${campaignBlocks.join('\n')}
      </ud-content>

    </ud-layout>
  `
}
