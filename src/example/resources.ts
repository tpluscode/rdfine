import ns from '@rdfjs/namespace'
import { prefixes } from '@zazuko/rdf-vocabularies'
import { namespace, property, RdfResourceImpl, Constructor, RdfResource } from '../'

const hydra = ns(prefixes.hydra)

export interface Collection extends RdfResource {
  members: HydraResource[]
}

export function CollectionMixin<Base extends Constructor>(base: Base) {
  @namespace(hydra)
  class C extends base implements Collection {
    @property.resource({ path: 'member', array: true })
    members!: HydraResource[]
  }

  return C
}
CollectionMixin.shouldApply = (res: HydraResource) => {
  return res.hasType(hydra.Collection)
}

export class HydraResource extends RdfResourceImpl {
}
