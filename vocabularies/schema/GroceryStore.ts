import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GroceryStore)
  }
}
GroceryStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GroceryStore)
GroceryStoreMixin.Class = GroceryStoreImpl
