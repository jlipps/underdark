import {findPods, comparePodsByNum} from '../shared/queries.mjs'

export async function get(/*req*/) {
  let pods = await findPods({}, comparePodsByNum)
  pods = pods.map((c) => c.pod)

  return {
    json: {pods}
  }
}
