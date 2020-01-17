import { RdfResource, ResourceIdentifier } from '../../RdfResource'
import { fromResource } from '../../conversion'
import { AccessorOptions, ObjectOrFactory, propertyDecorator } from '../property'
import { Constructor, Mixin } from '../../ResourceFactory'

interface ResourceOptions<R extends RdfResource> {
  as?: Mixin<any>[] | [Constructor, ...Mixin<any>[]]
  initial?: ObjectOrFactory<R, ResourceIdentifier | RdfResource>
}

function resourcePropertyDecorator<R extends RdfResource>(options: AccessorOptions & ResourceOptions<R> = {}) {
  return propertyDecorator<RdfResource, ResourceIdentifier>({
    ...options,
    fromTerm(this: RdfResource, obj) {
      return fromResource(this, obj as any, options.as)
    },
    toTerm(value: RdfResource) {
      return value.id
    },
    valueTypeName: 'RdfResource instance',
    assertSetValue: (value) => {
      if ('termType' in value) {
        return value.termType === 'NamedNode' || value.termType === 'BlankNode'
      }

      return true
    },
  })
}

export default resourcePropertyDecorator
