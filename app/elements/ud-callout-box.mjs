export default function UDCalloutBox({html}) {
  return html`
    <div class="box media container">
      <div class="media-content">
        <div class="content">
          <p><strong><slot name="title"></slot></strong></p>
          <slot></slot>
        </div>
      </div>
    </div>
  `
}
