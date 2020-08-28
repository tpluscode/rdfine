import cf, { AnyPointer } from 'clownface'
import $rdf from 'rdf-ext'
import { rdf, rdfs } from '@tpluscode/rdf-ns-builders'
import { findTermsToGenerate } from '../../lib/EnumerationGenerator'
import { FakeTypeCollection } from '../_helpers/FakeTypeCollection'
import { ex } from '../_helpers/prefix'

describe('EnumerationGenerator', () => {
  let vocabulary: AnyPointer

  beforeEach(() => {
    vocabulary = cf({ dataset: $rdf.dataset() })
  })

  it('creates a module for every enumeration type', () => {
    // given
    const types = new FakeTypeCollection([
      [ex.Enum1, { type: 'Enumeration' as const }],
      [ex.Enum2, { type: 'Enumeration' as const }],
    ])
    vocabulary
      .node(ex.Enum1).addOut(rdf.type, rdfs.Class)
      .node(ex.Enum2).addOut(rdf.type, rdfs.Class)

    // when
    const result = findTermsToGenerate(types, {
      vocabulary,
    })

    // then
    expect(result.map(m => m.node.value)).toEqual(
      expect.arrayContaining([
        vocabulary.node(ex.Enum1).value,
        vocabulary.node(ex.Enum2).value,
      ]),
    )
  })
})
