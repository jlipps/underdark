export default function Episode({html, state}) {
  const {store} = state
  const {data} = store
  const {html: mdHtml, episode, nextEpisode, prevEpisode} = data
  const {title, episodeNum, campaign, author} = episode
  const {name: campaignName, path: campaignPath} = campaign
  const {name: authorName, path: authorPath} = author

  let nextEpisodeBtn = ''
  if (nextEpisode) {
    nextEpisodeBtn = html`
      <a class="button mt-6" href="${nextEpisode.episode.path}">
        Ep. ${nextEpisode.episode.episodeNum},&nbsp;<em>${nextEpisode.episode.title}</em>
        <ud-icon icon="angles-right"></ud-icon>
      </a>
    `
  }

  let prevEpisodeBtn = ''
  if (prevEpisode) {
    prevEpisodeBtn = html`
      <a class="button mt-6" href="${prevEpisode.episode.path}">
        <ud-icon icon="angles-left"></ud-icon>
        Ep. ${prevEpisode.episode.episodeNum},&nbsp;<em>${prevEpisode.episode.title}</em>
      </a>
    `
  }

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="/_static/img/hero-books.jpg">
        <h1 class="title p-6">&nbsp;</h1>
      </ud-hero>

      <ud-markdown class="is-flex is-justify-content-center">
        <h1>${title}</h1>
        <div class="tags is-justify-content-center">
          <span class="tag is-light"><a href="${campaignPath}">${campaignName}</a>, Episode ${episodeNum}</span>
          <span class="tag is-light">By&nbsp;<a href="${authorPath}">${authorName}</a></span>
        </div>
        ${mdHtml}
      </ud-markdown>

      <div class="is-flex is-justify-content-space-between">
        <div>
          ${prevEpisodeBtn}
        </div>
        <div>
          ${nextEpisodeBtn}
        </div>
      </div>

    </ud-layout>
  `
}
