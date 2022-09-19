import arc from '@architect/functions'

export default function Pod({html, state}) {
  const {store} = state
  const {data} = store
  const {html: mdHtml, pod} = data
  const {title, snippet, episode, campaign, url, image, date, duration, path} = pod
  const {episodeNum, path: episodePath} = episode.episode
  const {name: campaignName, path: campaignPath} = campaign.campaign

  let imageHtml = ''
  if (image) {
    imageHtml = html`
      <figure class="image is-128x128"><img src="${arc.static(image)}" class="is-rounded" /></figure>
    `
  }

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-bells.jpg')}">
        <h1>Podcast Episode</h1>
      </ud-hero>
      <ud-content>
        <h1 class="title">${title}</h1>
        <div class="tags is-justify-content-center">
          <span class="tag is-light">${date}</span>
          <span class="tag is-light">${duration}</span>
          <span class="tag is-light"><a href="${campaignPath}">${campaignName}</a>, episode ${episodeNum}</span>
          <span class="tag is-light"><a href="${episodePath}">Read episode</a></span>
        </div>
        ${imageHtml}
        <div class="is-flex is-justify-content-center">
          <audio controls src="${url}">Upgrade your browser</audio>
        </div>
        <ud-listen-list size="small mb-3 mt-3"></ud-listen-list>
        ${mdHtml}
      </ud-content>
    </ud-layout>
  `
}
