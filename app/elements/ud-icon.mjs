export default function UDIcon({html, state}) {
  const {attrs = {}} = state
  let {icon, size = 'medium', border} = attrs
  const faSize = attrs['fa-size']
  const faSizeClass = faSize ? `class="fa-${faSize}"` : ''
  if (!icon) {
    throw new Error(`<ud-icon> needs an icon attr`)
  }
  return html`
    <style>
      .button ud-icon {
          width: 1em;
      }
    </style>

    <span class="icon is-${size}">
      <span ${faSizeClass}>
        <i class="fas fa-${icon} ${border ? 'fa-border' : ''}"></i>
      </span>
    </span>
  `
}
