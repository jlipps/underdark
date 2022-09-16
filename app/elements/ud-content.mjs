export default function UDContent({html}) {
  return html`
    <style>
      .ud-content figure {
        margin: 2em auto;
      }
      .ud-content {
        max-width: 800px;
      }
    </style>

    <div class="content ud-content">
      <slot></slot>
    </div>
  `
}
