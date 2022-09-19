import {POD_LINK_APPLE, POD_LINK_GOOGLE, POD_LINK_AMAZON, POD_LINK_SPOTIFY} from '../shared/constants.mjs'

export default function UDListenList({html, state}) {
  const {attrs} = state
  const {size} = attrs
  const sizeClass = size ? `ud-size-${size}` : ''

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
    </style>

    <div class="buttons is-justify-content-center ${sizeClass}">
      <div class="leading-text">
        <slot></slot>
      </div>
      <a class="button" href="${POD_LINK_SPOTIFY}">
        <ud-icon icon="brands spotify"></ud-icon>
        Spotify
      </a>

      <a class="button" href="${POD_LINK_APPLE}">
        <ud-icon icon="brands apple"></ud-icon>
        Apple
      </a>

      <a class="button" href="${POD_LINK_GOOGLE}">
        <ud-icon icon="brands google"></ud-icon>
        Google
      </a>

      <a class="button" href="${POD_LINK_AMAZON}">
        <ud-icon icon="brands amazon"></ud-icon>
        Amazon
      </a>
    </div>
  `
}