import { rdf } from '@tpluscode/rdf-ns-builders'
import { BlankNode, DatasetCore, NamedNode, Term } from 'rdf-js'
import { SingleContextClownface } from 'clownface'
import { Initializer, RdfResource, ResourceIdentifier } from '../../RdfResource'
import { AccessorOptions, ObjectOrFactory, propertyDecorator } from '../property'
import { Constructor, Mixin, ResourceIndexer } from '../../ResourceFactory'
import * as compare from '../../compare'

type InitialValue = SingleContextClownface<DatasetCore, ResourceIdentifier> | RdfResource

interface ResourceOptions<R extends RdfResource> {
  as?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]
  initial?: ObjectOrFactory<R, InitialValue | RdfResource, ResourceIdentifier>
}

function resourcePropertyDecorator<R extends RdfResource>(options: AccessorOptions & ResourceOptions<R> = {}) {
  return propertyDecorator<R, RdfResource, ResourceIdentifier>({
    ...options,
    fromTerm(this: RdfResource, obj) {
      return this._create(obj, options.as)
    },
    toTerm(this: RdfResource & ResourceIndexer, value: RdfResource | Initializer<R>) {
      if ('_selfGraph' in value) {
        return value.id
      }

      let valueNode: SingleContextClownface<any, BlankNode | NamedNode>

      if (value.id) {
        valueNode = this._selfGraph.node(value.id)
      } else {
        valueNode = this._selfGraph.blankNode()
      }
      if (value.types && Array.isArray(value.types)) {
        valueNode.addOut(rdf.type, value.types)
      }

      const valueResource = this._create(valueNode)

      Object.entries(value)
        .filter(([prop]) => prop !== 'id' && prop !== 'types')
        .forEach(([prop, propValue]) => {
          valueResource[prop] = propValue as any
        })

      return valueNode.term
    },
    valueTypeName: 'RdfResource instance',
    assertSetValue: (value) => {
      let term: Term | null = null

      if ('termType' in value) {
        term = value
      } else if ('term' in value) {
        term = value.term
      }

      if (term) {
        return term.termType === 'NamedNode' || term.termType === 'BlankNode'
      }

      return true
    },
    compare: compare.resources(true),
  })
}

export default resourcePropertyDecorator
