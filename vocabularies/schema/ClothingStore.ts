import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ClothingStore>) {
    super(arg, init)
    this.types.add(schema.ClothingStore)
  }
}
ClothingStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ClothingStore)
ClothingStoreMixin.Class = ClothingStoreImpl
