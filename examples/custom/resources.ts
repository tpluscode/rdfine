import ns from '@rdfjs/namespace'
import prefixes from '@zazuko/prefixes'
import RdfResourceImpl, { namespace, property, Constructor, RdfResource } from '@tpluscode/rdfine'
import ResourceFactoryImpl, { ResourceFactory } from '@tpluscode/rdfine/lib/ResourceFactory'

const hydra = ns(prefixes.hydra)

export interface Collection extends RdfResource {
  members: RdfResource[]
}

export function CollectionMixin<Base extends Constructor>(base: Base) {
  @namespace(hydra)
  class C extends base implements Collection {
    @property.resource({ path: 'member', values: 'array' })
      members!: HydraResource[]
  }

  return C
}
CollectionMixin.appliesTo = hydra.Collection

export class HydraResource extends RdfResourceImpl {
  public static factory: ResourceFactory = new ResourceFactoryImpl(HydraResource)
}
