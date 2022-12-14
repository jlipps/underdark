import arc from '@architect/functions'

export default function Episode({html, state}) {
  const {store} = state
  const {episode, nextEpisode, prevEpisode} = store
  const {title, image, episodeNum, campaign, author, date, pod, html: mdHtml} = episode
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
      <a class="button mt-6" href="${nextEpisode.path}">
        Ep. ${nextEpisode.episodeNum},&nbsp;<em>${nextEpisode.title}</em>
        <ud-icon icon="angles-right" pos="right"></ud-icon>
      </a>
    `
  }

  let prevEpisodeBtn = ''
  if (prevEpisode) {
    prevEpisodeBtn = html`
      <a class="button mt-6" href="${prevEpisode.path}">
        <ud-icon icon="angles-left"></ud-icon>
        Ep. ${prevEpisode.episodeNum},&nbsp;<em>${prevEpisode.title}</em>
      </a>
    `
  }

  let podHtml = ''
  if (pod) {
    podHtml = html`
      <span class="tag is-light">
        <ud-icon icon="headphones"></ud-icon>
        <a href="${pod.path}">Listen</a>
      </span>
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
          ${podHtml}
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
