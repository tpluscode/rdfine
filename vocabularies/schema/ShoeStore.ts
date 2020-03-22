import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface ShoeStore extends Schema.Store, RdfResource {
}

export default function ShoeStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ShoeStoreClass extends StoreMixin(Resource) implements ShoeStore {
  }
  return ShoeStoreClass
}

class ShoeStoreImpl extends ShoeStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ShoeStore)
  }
}
ShoeStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ShoeStore)
ShoeStoreMixin.Class = ShoeStoreImpl
