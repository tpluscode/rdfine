import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface FurnitureStore extends Schema.Store, RdfResource {
}

export default function FurnitureStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FurnitureStoreClass extends StoreMixin(Resource) implements FurnitureStore {
  }
  return FurnitureStoreClass
}

class FurnitureStoreImpl extends FurnitureStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FurnitureStore>) {
    super(arg, init)
    this.types.add(schema.FurnitureStore)
  }
}
FurnitureStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FurnitureStore)
FurnitureStoreMixin.Class = FurnitureStoreImpl
