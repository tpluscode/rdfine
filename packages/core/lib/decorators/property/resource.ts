import { rdf } from '@tpluscode/rdf-ns-builders'
import { BlankNode, NamedNode, Term } from 'rdf-js'
import type { SingleContextClownface } from 'clownface'
import type { Initializer, RdfResource, ResourceIdentifier } from '../../../RdfResource'
import type { AccessorOptions, ObjectOrFactory } from '.'
import { propertyDecorator } from '.'
import type { Constructor, Mixin } from '../../ResourceFactory'
import * as compare from '../../compare'

type InitialValue = SingleContextClownface<ResourceIdentifier> | RdfResource

interface ResourceOptions<R extends RdfResource> {
  as?: Mixin[] | [Constructor, ...Mixin[]]
  implicitTypes?: NamedNode[]
  initial?: ObjectOrFactory<R, InitialValue | RdfResource, ResourceIdentifier>
}

function resourcePropertyDecorator<R extends RdfResource>(options: AccessorOptions & ResourceOptions<R> = {}) {
  return propertyDecorator<R, RdfResource, ResourceIdentifier>({
    ...options,
    fromTerm(this: RdfResource, obj) {
      if (options.implicitTypes) {
        obj.addOut(rdf.type, options.implicitTypes)
      }

      return this._create(obj, options.as, { parent: this })
    },
    toTerm(this: R, valueActual) {
      const value = valueActual as RdfResource | Initializer<R>

      if ('pointer' in value) {
        return value.id
      }

      let valueNode: SingleContextClownface<BlankNode | NamedNode>

      if (value.id) {
        valueNode = this.pointer.node(value.id)
      } else {
        valueNode = this.pointer.blankNode()
      }
      if (value.types && Array.isArray(value.types)) {
        valueNode.addOut(rdf.type, value.types)
      }

      this._create(valueNode, [], {
        initializer: value,
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
