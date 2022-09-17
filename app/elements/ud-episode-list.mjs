export default function UDEpisodeList({html, state}) {
  const {store} = state
  const {episodes} = store

  const episodeBlocks = episodes.map((e) => {
    const {path, title, episodeNum, snippet, campaign, author, date, image} = e
    return html`
      <article class="media">
        <ud-thumbnail image="${image}" text="${episodeNum}"></ud-thumbnail>
        <div class="media-content">
          <div class="content">
            <h4><a href="${path}">${title}</a></h4>
            <div class="tags">
              <span class="tag is-light"><a href="${campaign.path}">${campaign.name}</a></span>
              <span class="tag is-light">Episode ${episodeNum}</span>
              <span class="tag is-light">By&nbsp;<a href="${author.path}">${author.name}</a></span>
              <span class="tag is-light">${date}</span>
            </div>
            <div>${snippet} <a href="${path}">[read more]</a></div>
          </div>
        </div>
      </article>
    `
  })

  return episodeBlocks.join('\n')
}
