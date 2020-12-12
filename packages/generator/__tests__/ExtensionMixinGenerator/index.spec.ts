import { findTermsToGenerate } from '../../lib/ExtensionMixinGenerator'
import cf, { AnyPointer } from 'clownface'
import $rdf from 'rdf-ext'
import { FakeTypeCollection } from '../_helpers/FakeTypeCollection'
import { fakeLog } from '../_helpers/util'
import { Context } from '../../lib'
import { dash, rdfs, sh } from '@tpluscode/rdf-ns-builders'

describe('ExtensionMixinGenerator', () => {
  let vocabulary: AnyPointer
  let log: Context['log']
  let properties: Context['properties']

  beforeEach(() => {
    vocabulary = cf({ dataset: $rdf.dataset() })
    log = fakeLog()
    properties = {}
  })

  it('generates a module for types from extended vocab which are property domain', () => {
    // const
    const types = new FakeTypeCollection([
      [sh.PropertyShape, { type: 'ExternalResource' }],
    ])
    vocabulary
      .namedNode(dash.hidden).addOut(rdfs.domain, sh.PropertyShape)
      .namedNode(dash.defaultViewForRole).addOut(rdfs.domain, sh.PropertyShape)

    // when
    const modules = findTermsToGenerate(types, { vocabulary, log, properties, prefix: 'ex' })

    // then
    expect(modules).toHaveLength(1)
    expect(modules[0].node.term).toEqual(sh.PropertyShape)
    expect(modules[0].properties).toEqual(
      expect.arrayContaining([expect.objectContaining({
        term: dash.hidden,
      }), expect.objectContaining({
        term: dash.defaultViewForRole,
      })]),
    )
  })
})
