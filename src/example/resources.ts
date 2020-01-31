import ns from '@rdfjs/namespace'
import { prefixes } from '@zazuko/rdf-vocabularies'
import * as rdfine from '../'
import ResourceFactory from '../lib/ResourceFactory'

const hydra = ns(prefixes.hydra)

export interface Collection extends rdfine.RdfResource {
  members: HydraResource[]
}

export function CollectionMixin<Base extends rdfine.Constructor>(base: Base) {
  @rdfine.namespace(hydra)
  class C extends base implements Collection {
    @rdfine.property.resource({ path: 'member', values: 'array' })
    members!: HydraResource[]
  }

  return C
}
CollectionMixin.shouldApply = (res: HydraResource) => {
  return res.hasType(hydra.Collection)
}

export class HydraResource extends rdfine.RdfResourceImpl {
  public static factory: ResourceFactory = new ResourceFactory(HydraResource)
}
