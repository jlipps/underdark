import arc from '@architect/functions'
import {POD_LINK_APPLE, POD_LINK_GOOGLE, POD_LINK_AMAZON, POD_LINK_SPOTIFY, RSS_PATH} from '../shared/constants.mjs'

export default function UDListenList({html, state}) {
  const {attrs} = state
  const {size} = attrs
  const showNotes = attrs['show-notes']
  const sizeClass = size ? `ud-size-${size}` : ''

  const showNotesHtml = showNotes ? html`
    <a class="button" href="/podcast">
      <ud-icon icon="microphone"></ud-icon>
      <img class="logo-button" src="${arc.static('img/underdark-logo-small.png')}" />
    </a>
  ` : ''

  return html`
    <style>
      .ud-size-small .button {
        font-size: 0.75rem;
      }

      .leading-text {
        font-size: 0.75rem;
        font-style: italic;
        margin-right: 0.75rem;
      }

      .button .logo-button {
        height: 1rem;
      }
    </style>

    <div class="buttons is-justify-content-center ${sizeClass}">
      <div class="leading-text">
        <slot></slot>
      </div>

      ${showNotesHtml}

      <a class="button" href="${POD_LINK_SPOTIFY}" target="_blank">
        <ud-icon icon="brands spotify"></ud-icon>
        Spotify
      </a>

      <a class="button" href="${POD_LINK_APPLE}" target="_blank">
        <ud-icon icon="brands apple"></ud-icon>
        Apple
      </a>

      <a class="button" href="${POD_LINK_GOOGLE}" target="_blank">
        <ud-icon icon="brands google"></ud-icon>
        Google
      </a>

      <a class="button" href="${POD_LINK_AMAZON}" target="_blank">
        <ud-icon icon="brands amazon"></ud-icon>
        Amazon
      </a>

      <a class="button" href="${RSS_PATH}" target="_blank">
        <ud-icon icon="rss"></ud-icon>
        RSS Feed
      </a>
    </div>
  `
}
