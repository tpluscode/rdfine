import builder from '@rdfjs/namespace'
import { prefixes } from '@zazuko/rdf-vocabularies'
import cf from 'clownface'
import $rdf from 'rdf-ext'
import { Constructor, namespace, property } from '..'
import RdfResource from '../RdfResource'

const schema = builder(prefixes.schema)
const rdfs = builder(prefixes.rdfs)

describe('decorator', () => {
  describe('namespace', () => {
    it('sets namespace property from string', () => {
      // given
      @namespace('http://foo/')
      class WithNamespace extends RdfResource {
      }

      // when
      const ns = WithNamespace.__ns()

      // then
      expect(ns.value).toEqual('http://foo/')
    })

    it('sets namespace property from builder', () => {
      // given
      const foaf = builder(prefixes.foaf)
      @namespace(foaf)
      class WithNamespace extends RdfResource {
      }

      // when
      const ns = WithNamespace.__ns()

      // then
      expect(ns.value).toEqual(foaf('').value)
    })

    describe('used on mixins', () => {
      function SchemaMixin<Base extends Constructor>(base: Base) {
        @namespace(prefixes.schema)
        class Schema extends base {
          @property.literal()
          public name!: string
        }

        return Schema
      }

      function RdfsMixin<Base extends Constructor>(base: Base) {
        @namespace(prefixes.rdfs)
        class Rdfs extends base {
          @property.literal()
          public label!: string
        }

        return Rdfs
      }

      it('applies only to owned properties', () => {
        // given
        class TwoNamespaces extends SchemaMixin(RdfsMixin(RdfResource)) {}
        const node = cf({
          dataset: $rdf.dataset(),
          term: $rdf.blankNode(),
        })
          .addOut(schema('name'), 'schema name')
          .addOut(schema('label'), 'schema label')
          .addOut(rdfs('name'), 'rdfs name')
          .addOut(rdfs('label'), 'rdfs label')

        // when
        const resource = new TwoNamespaces(node)

        // then
        expect(resource.name).toBe('schema name')
        expect(resource.label).toBe('rdfs label')
      })
    })
  })
})
