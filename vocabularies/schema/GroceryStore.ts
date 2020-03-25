import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface GroceryStore extends Schema.Store, RdfResource {
}

export default function GroceryStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GroceryStoreClass extends StoreMixin(Resource) implements GroceryStore {
  }
  return GroceryStoreClass
}

class GroceryStoreImpl extends GroceryStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GroceryStore>) {
    super(arg, init)
    this.types.add(schema.GroceryStore)
  }
}
GroceryStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GroceryStore)
GroceryStoreMixin.Class = GroceryStoreImpl
