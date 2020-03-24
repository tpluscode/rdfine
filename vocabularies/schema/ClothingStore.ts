import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface ClothingStore extends Schema.Store, RdfResource {
}

export default function ClothingStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ClothingStoreClass extends StoreMixin(Resource) implements ClothingStore {
  }
  return ClothingStoreClass
}

class ClothingStoreImpl extends ClothingStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ClothingStore>) {
    super(arg)
    this.types.add(schema.ClothingStore)
    initializeProperties(this, init)
  }
}
ClothingStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ClothingStore)
ClothingStoreMixin.Class = ClothingStoreImpl
