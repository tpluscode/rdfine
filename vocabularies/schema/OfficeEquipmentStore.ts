import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<OfficeEquipmentStore>) {
    super(arg)
    this.types.add(schema.OfficeEquipmentStore)
    initializeProperties<OfficeEquipmentStore>(this, init)
  }
}
OfficeEquipmentStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OfficeEquipmentStore)
OfficeEquipmentStoreMixin.Class = OfficeEquipmentStoreImpl
