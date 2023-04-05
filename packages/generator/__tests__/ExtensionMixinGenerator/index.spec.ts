import { findTermsToGenerate } from '../../lib/ExtensionMixinGenerator'
import cf, { AnyPointer } from 'clownface'
import $rdf from 'rdf-ext'
import { FakeTypeCollection } from '../_helpers/FakeTypeCollection'
import { fakeLog } from '../_helpers/util'
import { Context } from '../../lib'
import { dash, rdfs, sh } from '@tpluscode/rdf-ns-builders'
import { ExtensionIndexModule } from '../../lib/ExtensionMixinGenerator/ExtensionIndexModule'
import { ExtensionModule } from '../../lib/ExtensionMixinGenerator/ExtensionModule'

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
    const [extensionModule] = findTermsToGenerate(types, { vocabulary, log, properties, prefix: 'ex' }) as [ExtensionModule]

    // then
    expect(extensionModule.node?.term).toEqual(sh.PropertyShape)
    expect(extensionModule.properties).toEqual(
      expect.arrayContaining([expect.objectContaining({
        term: dash.hidden,
      }), expect.objectContaining({
        term: dash.defaultViewForRole,
      })]),
    )
  })

  it('generates an index module for extended vocabs', () => {
    // const
    const types = new FakeTypeCollection([
      [sh.PropertyShape, { type: 'ExternalResource' }],
    ])
    vocabulary
      .namedNode(dash.hidden).addOut(rdfs.domain, sh.PropertyShape)
      .namedNode(dash.defaultViewForRole).addOut(rdfs.domain, sh.PropertyShape)

    // when
    const [, indexModule] = findTermsToGenerate(types, { vocabulary, log, properties, prefix: 'ex' }) as [any, ExtensionIndexModule]

    // then
    expect(indexModule.prefix).toEqual('sh')
    expect(indexModule.terms).toEqual(['PropertyShape'])
  })

  it('does not generate an index module for own types', () => {
    // const
    const types = new FakeTypeCollection([
      [sh.Shape, { type: 'Resource' }],
    ])
    vocabulary.namedNode(dash.hidden).addOut(rdfs.domain, sh.Shape)

    // when
    const modules = findTermsToGenerate(types, { vocabulary, log, properties, prefix: 'dash' })

    // then
    expect(modules).toHaveLength(0)
  })
})
