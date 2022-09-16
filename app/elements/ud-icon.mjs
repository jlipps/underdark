export default function UDIcon({html, state}) {
  const {attrs = {}} = state
  let {icon, size = 'medium', border, pos='left'} = attrs
  const faSize = attrs['fa-size']
  const faSizeClass = faSize ? `class="fa-${faSize}"` : ''
  if (!icon) {
    throw new Error(`<ud-icon> needs an icon attr`)
  }
  return html`
    <style>
    </style>

    <span class="icon is-${size} m${pos === 'left' ? 'r' : 'l'}-1">
      <span ${faSizeClass}>
        <i class="fas fa-${icon} ${border ? 'fa-border' : ''}"></i>
      </span>
    </span>
  `
}
