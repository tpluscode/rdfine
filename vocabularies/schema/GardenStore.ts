import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface GardenStore extends Schema.Store, RdfResource {
}

export default function GardenStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GardenStoreClass extends StoreMixin(Resource) implements GardenStore {
  }
  return GardenStoreClass
}

class GardenStoreImpl extends GardenStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<GardenStore>) {
    super(arg)
    this.types.add(schema.GardenStore)
    initializeProperties<GardenStore>(this, init)
  }
}
GardenStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GardenStore)
GardenStoreMixin.Class = GardenStoreImpl
