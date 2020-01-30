import { DatasetCore, Term } from 'rdf-js'
import { SingleContextClownface } from 'clownface'
import { RdfResource, ResourceIdentifier } from '../../RdfResource'
import { AccessorOptions, ObjectOrFactory, propertyDecorator } from '../property'
import { Constructor, Mixin } from '../../ResourceFactory'

type InitialValue = SingleContextClownface<DatasetCore, ResourceIdentifier> | RdfResource

interface ResourceOptions<R extends RdfResource> {
  as?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]
  initial?: ObjectOrFactory<R, InitialValue | RdfResource>
}

function resourcePropertyDecorator<R extends RdfResource>(options: AccessorOptions & ResourceOptions<R> = {}) {
  return propertyDecorator<RdfResource, InitialValue>({
    ...options,
    fromTerm(this: RdfResource, obj) {
      return this._create(obj, options.as)
    },
    toTerm(value: RdfResource) {
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
    compare(left, right) {
      if (!left || !right) {
        return false
      }

      return left.id.equals(right.id) && left._graphId.equals(right._graphId)
    },
  })
}

export default resourcePropertyDecorator
