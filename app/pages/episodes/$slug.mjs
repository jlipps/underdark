export default function Episode({html, state}) {
  const {store} = state
  const {slug} = store
  return html`
    <section class="section">
      This is episode with slug ${slug}
    </section>
  `
}
