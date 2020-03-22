import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface OfficeEquipmentStore extends Schema.Store, RdfResource {
}

export default function OfficeEquipmentStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OfficeEquipmentStoreClass extends StoreMixin(Resource) implements OfficeEquipmentStore {
  }
  return OfficeEquipmentStoreClass
}

class OfficeEquipmentStoreImpl extends OfficeEquipmentStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.OfficeEquipmentStore)
  }
}
OfficeEquipmentStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OfficeEquipmentStore)
OfficeEquipmentStoreMixin.Class = OfficeEquipmentStoreImpl
