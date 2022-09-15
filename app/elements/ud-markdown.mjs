export default function UDMarkdown({html}) {
  return html`
    <style>
      .ud-markdown {
        max-width: 800px;
      }
      .ud-markdown h1 {
        text-align: center;
      }
    </style>

    <div class="content ud-markdown">
      <slot></slot>
    </div>
  `
}
