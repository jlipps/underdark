export default function UDLayout({html}) {
  return html`
    <style>
      #main {
        min-height: 100vh;
      }

      .navbar-brand {
        align-items: center;
      }

      .navbar-brand a.button:hover {
        background-color: #222;
      }
    </style>

    <div id="main" class="is-flex is-flex-direction-column">
      <div>
        <nav class="navbar container is-desktop">
          <div class="navbar-brand">
            <a class="button is-primary navbar-item" href="/"><img src="/_static/img/underdark-logo-small-trans.png" /></a>
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
              <a class="navbar-item" href="/about">Contact</a>
            </div>
            <div class="navbar-end">
              <div class="buttons">
                <a class="button is-primary" href="/latest"><ud-icon icon="quote-left" class="mr-3"></ud-icon> <span>Latest Story</span></a>
                <a class="button is-primary" href="/podcast"><ud-icon icon="microphone" class="mr-3"></ud-icon> <span>Podcast</span></a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <slot name="hero"></slot>
      <section class="section container is-desktop is-flex-grow-1">
        <slot></slot>
      </section>
      <footer class="footer">
        <div class="container is-desktop has-text-centered is-size-7">
          &copy; 2022 Jonathan Lipps. All names and trademarks are the property of their respective owners. This site is not affiliated with Dungeons &amp; Dragons or Wizards of the Coast.
        </div>
      </footer>
    </div>
  `
}
