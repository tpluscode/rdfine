import cf, { Clownface } from 'clownface'
import $rdf from 'rdf-ext'
import { rdf, rdfs, schema, xsd } from '@tpluscode/rdf-ns-builders'
import { ex } from '../_helpers/prefix'
import {
  EnumerationMember,
  EnumerationType,
  ExternalResourceType,
  LiteralType,
  ResourceType,
  TermType,
} from '../../lib/types'
import * as factories from '../../lib/types/metaFactories'

describe('meta factory', () => {
  let graph: Clownface

  beforeEach(() => {
    graph = cf({ dataset: $rdf.dataset() })
  })

  describe('resourceTypes', () => {
    it('returns null for non-class', () => {
      // given
      const node = graph.node(ex.Type)

      // when
      const meta = factories.resourceTypes(node, {
        prefix: 'ex',
      })

      // then
      expect(meta).toBeNull()
    })

    it('returns meta of term from same namespace', () => {
      // given
      const node = graph.node(ex.Hello).addOut(rdf.type, rdfs.Class)

      // when
      const meta = factories.resourceTypes(node, {
        prefix: 'ex',
      })

      // then
      expect(meta).toEqual({
        type: 'Resource',
        mixinName: 'HelloMixin',
        module: './Hello',
        qualifiedName: 'Ex.Hello',
        localName: 'Hello',
      } as ResourceType)
    })

    it('returns meta of term from external vocabulary', () => {
      // given
      const node = graph.node(schema.Person).addOut(rdf.type, rdfs.Class)

      // when
      const meta = factories.resourceTypes(node, {
        prefix: 'ex',
      })

      // then
      expect(meta).toEqual({
        type: 'ExternalResource',
        mixinName: 'PersonMixin',
        package: '@rdfine/schema',
        module: '@rdfine/schema/Person',
        qualifiedName: 'Schema.Person',
        qualifier: 'Schema',
        qualifiedMixinName: 'Schema.PersonMixin',
      } as ExternalResourceType)
    })
  })

  describe('overrides', () => {
    it('assumes unprefixed name to be from current namespace', () => {
      // given
      const overrides = factories.overrides({
        [ex.Type.value]: 'string',
      })

      // when
      const meta = overrides(graph.node(ex.Type))

      // then
      expect(meta).toEqual({
        type: 'Literal',
        nativeName: 'string',
        nativeType: String,
      } as LiteralType)
    })

    it('creates a NamedNode term type', () => {
      // given
      const overrides = factories.overrides({
        [ex.Type.value]: 'NamedNode',
      })

      // when
      const meta = overrides(graph.node(ex.Type))

      // then
      expect(meta).toEqual({
        type: 'Term',
        termType: 'NamedNode',
      } as TermType)
    })

    it('creates a string literal with self as datatype when overridden', () => {
      // given
      const overrides = factories.overrides({
        [ex.Type.value]: 'Datatype',
      })

      // when
      const meta = overrides(graph.node(ex.Type))

      // then
      expect(meta).toEqual({
        type: 'Literal',
        nativeType: String,
        datatype: ex.Type,
        nativeName: 'string',
      } as LiteralType)
    })

    it('expands prefixed type name', () => {
      // given
      const overrides = factories.overrides({
        [schema.foo.value]: 'NamedNode',
      })

      // when
      const meta = overrides(graph.node(schema.foo))

      // then
      expect(meta).toEqual({
        type: 'Term',
        termType: 'NamedNode',
      } as TermType)
    })
  })

  describe('welldatatypes', () => {
    it('returns null for something unexpected', () => {
      // when
      const meta = factories.datatypes(graph.node(ex.foo))

      // then
      expect(meta).toBeNull()
    })

    it('returns an object for xsd:int', () => {
      // when
      const meta = factories.datatypes(graph.node(xsd.int))

      // then
      expect(meta).toEqual({
        nativeType: Number,
        type: 'Literal',
        nativeName: 'number',
      } as LiteralType)
    })

    it('returns an object for xsd:date', () => {
      // when
      const meta = factories.datatypes(graph.node(xsd.date))

      // then
      expect(meta).toEqual({
        nativeType: Date,
        type: 'Literal',
        nativeName: 'Date',
      } as LiteralType)
    })

    it('returns an object for xsd:date', () => {
      // when
      const meta = factories.datatypes(graph.node(xsd.boolean))

      // then
      expect(meta).toEqual({
        nativeType: Boolean,
        type: 'Literal',
        nativeName: 'boolean',
      } as LiteralType)
    })
  })

  describe('enumerationTypes', () => {
    it('returns null for non-class', () => {
      // given
      const node = graph.node(ex.Type)

      // when
      const meta = factories.enumerationTypes(node, {
        prefix: 'ex',
      })

      // then
      expect(meta).toBeNull()
    })

    it('returns EnumerationTypes for enumeration directly declared', () => {
      // given
      const node = graph.node(ex.Enumeration)
      node.addOut(rdf.type, [schema.Enumeration, rdfs.Class])
        .addOut(rdfs.subClassOf, [schema.Enumeration])

      // when
      const meta = factories.enumerationTypes(node, {
        prefix: 'ex',
      })

      // then
      expect(meta).toEqual({
        type: 'Enumeration',
        qualifiedName: 'Ex.Enumeration',
        module: './Enumeration',
        name: 'Enumeration',
      } as EnumerationType)
    })
  })

  describe('enumerationMembers', () => {
    it('returns term type when node has schema:Enumeration type', () => {
      // given
      const node = graph.node(ex.EnumerationMember)
      node.addOut(rdf.type, ex.Enumeration, enumeration => {
        enumeration.addOut(rdfs.subClassOf, schema.Enumeration)
      })

      // when
      const meta = factories.enumerationMembers(node)

      // then
      expect(meta).toEqual({
        type: 'EnumerationMember',
        prefixedName: 'ex.EnumerationMember',
        termName: 'EnumerationMember',
      } as EnumerationMember)
    })
  })
})
