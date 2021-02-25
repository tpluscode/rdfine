import { rdf } from '@tpluscode/rdf-ns-builders'
import { NamedNode, Term } from 'rdf-js'
import type { GraphPointer } from 'clownface'
import type { Initializer, RdfResourceCore, ResourceIdentifier } from '../../../RdfResource'
import type { AccessorOptions, ObjectOrFactory } from '.'
import { propertyDecorator } from '.'
import type { Constructor, Mixin } from '../../ResourceFactory'
import * as compare from '../../compare'
import { getPointer } from '../../resource'

type InitialValue = GraphPointer<ResourceIdentifier> | RdfResourceCore

interface ResourceOptions<R extends RdfResourceCore> {
  as?: Mixin[] | [Constructor, ...Mixin[]]
  implicitTypes?: NamedNode[]
  initial?: ObjectOrFactory<R, InitialValue | RdfResourceCore, ResourceIdentifier>
}

function resourcePropertyDecorator<R extends RdfResourceCore>(options: AccessorOptions & ResourceOptions<R> = {}) {
  return propertyDecorator<R, RdfResourceCore, Initializer<R>, ResourceIdentifier>({
    ...options,
    fromTerm(this: RdfResourceCore, obj) {
      if (options.implicitTypes) {
        obj.addOut(rdf.type, options.implicitTypes)
      }

      return this._create(obj, options.as, { parent: this })
    },
    toTerm(this: R, value): ResourceIdentifier {
      const valueNode = getPointer(this.pointer, value.id)
      if (value.types && Array.isArray(value.types)) {
        valueNode.addOut(rdf.type, value.types)
      }

      if (options.implicitTypes) {
        valueNode.addOut(rdf.type, options.implicitTypes)
      }

      this._create(valueNode, options.as, {
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
