export default function UDCharacterList({html, state}) {
  const {store} = state
  const {characters} = store

  const characterBlocks = characters.map((c) => {
    const {path, name, snippet, campaign, level, klass, race, image} = c
    return html`
      <article class="media">
        <ud-thumbnail image="${image}" text="${name[0]}"></ud-thumbnail>
        <div class="media-content">
          <div class="content">
            <h4><a href="${path}">${name}</a></h4>
            <div class="tags">
              <span class="tag is-light">Level ${level} ${race} ${klass}</span>
              <span class="tag is-light">In&nbsp;<a href="${campaign.path}">${campaign.name}</a></span>
            </div>
            <div>${snippet} <a href="${path}">[read more]</a></div>
          </div>
        </div>
      </article>
    `
  })

  return characterBlocks.join('\n')
}
