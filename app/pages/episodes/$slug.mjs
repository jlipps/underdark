import arc from '@architect/functions'

export default function Episode({html, state}) {
  const {store} = state
  const {data} = store
  const {html: mdHtml, episode, nextEpisode, prevEpisode} = data
  const {title, image, episodeNum, campaign, author, date} = episode
  const {name: campaignName, path: campaignPath} = campaign
  const {name: authorName, path: authorPath} = author

  let imageHtml = ''
  if (image) {
    imageHtml = html`
      <figure class="image is-128x128"><img src="${arc.static(image)}" class="is-rounded" /></figure>
    `
  }

  let nextEpisodeBtn = ''
  if (nextEpisode) {
    nextEpisodeBtn = html`
      <a class="button mt-6" href="${nextEpisode.episode.path}">
        Ep. ${nextEpisode.episode.episodeNum},&nbsp;<em>${nextEpisode.episode.title}</em>
        <ud-icon icon="angles-right" pos="right"></ud-icon>
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
      <ud-hero slot="hero" img="${arc.static('img/hero-adventure-forest.jpg')}">
        <h1>Episode</h1>
      </ud-hero>

      <ud-content>
        <h1 class="title">${title}</h1>
        <div class="tags is-justify-content-center">
          <span class="tag is-light"><a href="${campaignPath}">${campaignName}</a>, Episode ${episodeNum}</span>
          <span class="tag is-light">By&nbsp;<a href="${authorPath}">${authorName}</a></span>
          <span class="tag is-light">${date}</span>
        </div>
        ${imageHtml}
        ${mdHtml}
      </ud-content>

      <div class="is-flex is-justify-content-space-around is-flex-wrap-wrap">
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
