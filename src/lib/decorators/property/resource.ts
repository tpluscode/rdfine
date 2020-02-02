import { DatasetCore, Term } from 'rdf-js'
import { SingleContextClownface } from 'clownface'
import { RdfResource, ResourceIdentifier } from '../../../RdfResource'
import { AccessorOptions, ObjectOrFactory, propertyDecorator } from '../property'
import { Constructor, Mixin } from '../../ResourceFactory'
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
    toTerm(value) {
      return value.id
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
