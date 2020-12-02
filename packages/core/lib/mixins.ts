import { RdfResource } from '../RdfResource'
import { Constructor } from './ResourceFactory'

export function * mixins(resource: RdfResource): Generator<Constructor> {
  // eslint-disable-next-line @typescript-eslint/ban-types
  let ctor: Constructor | Function = resource.constructor

  while (ctor) {
    if ('__properties' in ctor) {
      yield ctor
    }

    ctor = Object.getPrototypeOf(ctor)
  }
}
