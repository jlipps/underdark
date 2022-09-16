export default function Episode({html, state}) {
  const {store} = state
  const {episodes} = store

  const episodeBlocks = episodes.map((e) => {
    const {path, title, episodeNum, snippet, campaign, author, date} = e
    return html`
      <article class="media">
        <div class="media-left has-background-grey-light">
          <p class="is-size-2 has-text-light">${episodeNum}</p>
        </div>
        <div class="media-content">
          <div class="content">
            <h4><a href="${path}">${title}</a></h4>
            <div class="tags">
              <span class="tag is-light"><a href="${campaign.path}">${campaign.name}</a></span>
              <span class="tag is-light">Episode ${episodeNum}</span>
              <span class="tag is-light">By&nbsp;<a href="${author.path}">${author.name}</a></span>
              <span class="tag is-light">${date}</span>
            </div>
            <div>${snippet}</div>
          </div>
        </div>
      </article>
    `
  })

  return html`
    <style>
      .media-left {
        width: 64px;
        height: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    </style>
    <ud-layout>
      <ud-hero slot="hero" img="/_static/img/hero-adventure-forest.jpg">
        <h1>All Episodes</h1>
      </ud-hero>

      <ud-content>
        ${episodeBlocks.join('\n')}
      </ud-content>

    </ud-layout>
  `
}
