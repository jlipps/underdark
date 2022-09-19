import arc from '@architect/functions'

export default function UDCalloutBox({html, state}) {
  const {attrs = {}} = state
  const {image} = attrs
  return html`
    <div class="box media container">
      <div class="media-left">
        <ud-thumbnail image="${image}" text=""></ud-thumbnail>
      </div>
      <div class="media-content">
        <div class="content">
          <p><strong><slot name="title"></slot></strong></p>
          <slot></slot>
        </div>
      </div>
    </div>
  `
}
