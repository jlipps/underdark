import arc from '@architect/functions'

export default function html({html, state}) {
  const {store} = state
  const {pods} = store

  const podBlocks = pods.map((p) => {
    const {title, snippet, episode, campaign, url, image, date, duration, path, shortId} = p
    const {episodeNum, path: episodePath} = episode
    const {name: campaignName, path: campaignPath} = campaign

    return html`
      <article class="media">
        <ud-thumbnail image="${image}" text="${title[0]}"></ud-thumbnail>
        <div class="media-content">
          <div class="content">
            <h4>${shortId}: <a href="${path}">${title}</a></h4>
            <div class="tags">
              <span class="tag is-light">${date}</span>
              <span class="tag is-light">${duration}</span>
              <span class="tag is-light"><a href="${campaignPath}">${campaignName}</a>, episode ${episodeNum}</span>
              <span class="tag is-light"><ud-icon icon="book"></ud-icon><a href="${episodePath}">Read</a></span>
            </div>
          </div>
          <div>${snippet} <a href="${path}">[read more]</a></div>
        </div>
      </article>
    `
  })

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-bells.jpg')}">
        <h1>Podcast</h1>
      </ud-hero>
      <ud-content>
        <h2>Listen on your favourite service...</h2>
        <ud-listen-list></ud-listen-list>

        <h2 class="mt-6 mb-5">...or right here</h2>
        ${podBlocks.join('\n')}

      </ud-content>
    </ud-layout>
  `
}
