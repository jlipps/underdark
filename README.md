# underdark

This is essentially a personal D&amp;D blog, hosted at [underdark.quest](https://underdark.quest).
You should probably not try to build or run this yourself. It is not released under a license where
you are free to use the content (it remains copyrighted to me). However I thought I would share how
the site is built in case anyone is interested to peek under the hood.

## Technical features

- Built with [enhance.dev](https://enhance.dev)
- Markdown+metdata-driven data model (no database!)
- No bundling -- all vanilla JS and CSS.
- Web components instead of a templating library (set up for progressive enhancement with JS if
  I want)
- [Bulma](https://bulma.io) for style library
- [Font Awesome](https://fontawesome.com) for icons
- Deployed via [Architect](https://arc.codes) to AWS Lambda+S3
