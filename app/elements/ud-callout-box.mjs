export default function UDCalloutBox({html, state}) {
  const {attrs = {}} = state
  const {icon = 'fa-home'} = attrs
  return html`
    <div class="box media container">
      <div class="media-left">
        <span class="icon is-large">
          <span class="fa-lg">
            <i class="fas ${icon} fa-border"></i>
          </span>
        </span>
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
