export default function UDHero({html, state}) {
  const {attrs = {}} = state
  const {img = ''} = attrs
  return html`
    <style>
    .hero-body h1 {
      padding: 0.75rem;
      margin: 0.75rem;
      font-size: 2rem;
      color: #000;
      background-color: rgba(255, 255, 255, 0.85);
      text-transform: lowercase;
    }
    </style>
    <section class="has-background-black">
      <div class="container is-desktop">
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
