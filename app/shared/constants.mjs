import arc from '@architect/functions'

let host = 'http://localhost:3333'
if (process.env.ARC_ENV === 'staging') {
  host = 'https://staging.underdark.quest'
} else if (process.env.ARC_ENV === 'production') {
  host = 'https://underdark.quest'
}
export const HOMEPAGE = host

export const TITLE = 'Notes from the Underdark'
export const OWNER_EMAIL = 'jlipps+underdark@gmail.com'
export const AUTHOR = 'Jonathan Lipps'
export const LANG = 'en-us'
export const IMAGE_SQ = arc.static('img/underdark-logo-square.jpg')
export const IMAGE_RECT = arc.static('img/underdark-on-bg.jpg')
export const POD_DESC = `Stories from the D&D campaigns I've played in, cast into a pod so that you can listen to our adventures. Visit the website at <a href="https://underdark.quest">underdark.quest</a> to read all the episodes as well as for campaign and character overviews.`
export const RSS_PATH = `/podcast/rss`

export const POD_LINK_APPLE = ''
export const POD_LINK_SPOTIFY = 'https://open.spotify.com/show/3UxIQyIsvQGv4dWQGPWRKY'
export const POD_LINK_GOOGLE = 'https://podcasts.google.com/feed/aHR0cHM6Ly91bmRlcmRhcmsucXVlc3QvcG9kY2FzdC9yc3M'
export const POD_LINK_AMAZON = 'https://music.amazon.com/podcasts/dc503e6b-4ec7-4dc0-a997-0130f48979f9'

export const TWITTER_HANDLE = '@underdark_notes'
