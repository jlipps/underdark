export default function UDCalloutBox({html, state}) {
  const {attrs = {}} = state
  const {icon = 'home'} = attrs
  return html`
    <div class="box media container">
      <div class="media-left">
        <ud-icon icon="${icon}" size="large" fa-size="lg" border="true"></ud-icon>
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
