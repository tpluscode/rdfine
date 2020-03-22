import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GardenStore)
  }
}
GardenStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GardenStore)
GardenStoreMixin.Class = GardenStoreImpl
