import { rdf } from '@tpluscode/rdf-ns-builders'
import { BlankNode, NamedNode, Term } from 'rdf-js'
import type { GraphPointer } from 'clownface'
import type { Initializer, RdfResourceCore, ResourceIdentifier } from '../../../RdfResource'
import type { AccessorOptions, ObjectOrFactory } from '.'
import { propertyDecorator } from '.'
import type { Constructor, Mixin } from '../../ResourceFactory'
import * as compare from '../../compare'

type InitialValue = GraphPointer<ResourceIdentifier> | RdfResourceCore

interface ResourceOptions<R extends RdfResourceCore> {
  as?: Mixin[] | [Constructor, ...Mixin[]]
  implicitTypes?: NamedNode[]
  initial?: ObjectOrFactory<R, InitialValue | RdfResourceCore, ResourceIdentifier>
}

function isRdfResource(maybeRdfResource: RdfResourceCore | Initializer<unknown>): maybeRdfResource is RdfResourceCore {
  return '_graphId' in maybeRdfResource
}

function resourcePropertyDecorator<R extends RdfResourceCore>(options: AccessorOptions & ResourceOptions<R> = {}) {
  return propertyDecorator<R, RdfResourceCore, ResourceIdentifier>({
    ...options,
    fromTerm(this: RdfResourceCore, obj) {
      if (options.implicitTypes) {
        obj.addOut(rdf.type, options.implicitTypes)
      }

      return this._create(obj, options.as, { parent: this })
    },
    toTerm(this: R, valueActual): ResourceIdentifier {
      const value = valueActual as RdfResourceCore | Initializer<R>

      if (isRdfResource(value)) {
        return value.id
      }

      let valueNode: GraphPointer<BlankNode | NamedNode>

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
