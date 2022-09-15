export default function UDLayout({html}) {
  return html`
    <div>
      <nav class="navbar container is-widescreen">
        <div class="navbar-brand">
          <a class="navbar-item" href="/"><img src="/_static/img/underdark-logo-small.png" /></a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Story</a>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="/campaigns">Campaigns</a>
                <a class="navbar-item" href="/characters">Characters</a>
                <a class="navbar-item" href="/episodes">Episodes</a>
              </div>
            </div>
            <a class="navbar-item" href="/about">About</a>
            <a class="navbar-item" href="/podcast">Podcast</a>
          </div>
          <div class="navbar-end">
            <div class="buttons">
              <a class="button is-primary" href="/latest">Latest Episode</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <slot name="hero"></slot>
    <section class="section container is-widescreen">
      <slot></slot>
    </section>
    <footer class="footer">
      <div class="container is-widescreen has-text-centered is-size-7">
        &copy; 2022 Jonathan Lipps. All names and trademarks are the property of their respective owners. This site is not affiliated with Dungeons &amp; Dragons or Wizards of the Coast.
      </div>
    </footer>
  `
}
