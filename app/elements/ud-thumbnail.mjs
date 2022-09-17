export default function UDThumbnail({html, state}) {
  const {attrs} = state
  const {image, text} = attrs

  let thumbnail = html`
    <div class="media-left has-background-grey-light">
      <p class="is-size-2 has-text-light">${text}</p>
    </div>
  `
  if (image) {
    thumbnail = html`
      <div class="media-left">
        <figure class="image is-64x64"><img src="${image}" class="is-rounded" /></figure>
      </div>
    `
  }
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

    ${thumbnail}
  `
}
