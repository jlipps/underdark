import arc from '@architect/functions'

export default function html({html, state}) {
  const {store} = state
  const {page, author} = store
  const {html: mdHtml, title, image} = page
  const {html: authorHtml, image: authorImage} = author

  return html`
    <ud-layout>
      <ud-hero slot="hero" img="${arc.static('img/hero-books.jpg')}">
        <h1>About</h1>
      </ud-hero>

      <ud-content class="is-flex is-justify-content-center">
        <h1>${title}</h1>
        <figure class="image is-128x128"><img src="${arc.static(image)}" class="is-rounded" /></figure>
        ${mdHtml}

        <h1>About the Author</h1>
        <figure class="image is-128x128"><img src="${arc.static(authorImage)}" class="is-rounded" /></figure>
        ${authorHtml}

        <h1>Beyond the Technical Veil</h1>
        Are you curious about the code that powers this site? I built it by hand (with lots of love of course), using standard web technologies plus a bit of help from some HTML and CSS frameworks. It's all open source for you to look at if you want: <a href="https://github.com/jlipps/underdark">github:jlipps/underdark</a>.
      </ud-content>

    </ud-layout>
  `
}
