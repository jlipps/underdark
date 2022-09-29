import {findPods, comparePodsByNum} from '../shared/queries.mjs'

export async function get(/*req*/) {
  let pods = await findPods({}, comparePodsByNum)

  return {
    json: {
      title: 'Podcast',
      pods,
    }
  }
}
