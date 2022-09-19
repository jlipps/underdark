/* global describe, it */

import { findEpisodes, findCampaigns, findCharacters, findPods } from '../shared/queries.mjs'
import { getCache } from '../shared/md-reader.mjs';
import should from 'should'

describe('Data model', function () {
  let curSize = 0
  it('should load everything', async function () {
    await findPods()
    await findEpisodes()
    await findCampaigns()
    await findCharacters()
  })
  it('should use the cache', function () {
    curSize = getCache().calculatedSize
    should(curSize).above(500)
  })
  it('should not grow cache by finding everything again', async function () {
    await findEpisodes()
    await findCampaigns()
    await findCharacters()
    await findPods()
    should(getCache().calculatedSize).eql(curSize)
  })
})
