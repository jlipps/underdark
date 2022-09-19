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
export const POD_DESC = `Stories from the D&D campaigns I've played in, cast into podcast form.`

export const POD_LINK_APPLE = ''
export const POD_LINK_SPOTIFY = ''
export const POD_LINK_GOOGLE = ''
export const POD_LINK_AMAZON = ''
