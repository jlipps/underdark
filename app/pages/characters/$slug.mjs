import arc from '@architect/functions'

export default function Character({html, state}) {
  const {store} = state
  const {data} = store
  const {html: mdHtml, character} = data
  const {name, campaign, nickname, player, playerUrl, race, age, klass, level, image,
         alignment} = character

  const playerName = player || 'Anonymous'
  const playerTag = playerUrl ?
    html`<a href="${playerUrl}">${playerName}</a>` :
    html`<strong>${playerName}</strong>`

  return html`
    <style>
      .card {
        width: 300px;
        margin: 0 auto;
        margin-bottom: 2rem;
      }

      .card .card-content {
        padding: 0;
        margin-top: -2rem;
      }

      .char-specs tr > td:first-child {
        font-weight: bold;
      }
    </style>

    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-sword.jpg')}">
        <h1>Character</h1>
      </ud-hero>

     <ud-content class="is-flex is-justify-content-center">
        <h1>${name}</h1>
        <div class="tags is-justify-content-center">
          <span class="tag is-light">In&nbsp;<a href="${campaign.path}">${campaign.name}</a></span>
          <span class="tag is-light">Played by&nbsp;${playerTag}</span>
        </div>
        <div class="card">
          <div class="card-image">
            <figure class="image"><img src="${arc.static(image)}" /></figure>
          </div>
          <div class="card-content">
            <table class="char-specs table is-striped is-narrow is-size-7">
              <tbody>
                <tr><td>Level</td><td>${level}</td></tr>
                <tr><td>Race</td><td>${race}</td></tr>
                <tr><td>Class</td><td>${klass}</td></tr>
                <tr><td>Age</td><td>${age}</td></tr>
                <tr><td>Alignment</td><td>${alignment}</td></tr>
                <tr><td>Nickname</td><td>${nickname}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          ${mdHtml}
        </div>
      </ud-content>
    </ud-layout>
  `
}
