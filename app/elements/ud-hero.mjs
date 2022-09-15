export default function UDHero({html, state}) {
  const {attrs = {}} = state
  const {img = ''} = attrs
  return html`
    <section class="has-background-black">
      <div class="container is-widescreen">
        <div class="hero has-background">
          <img class="hero-background" src="${img}" />
          <div class="hero-body is-justify-content-center is-flex">
            <slot></slot>
          </div>
        </div>
      </div>
    </section>
  `
}
