import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface OfficeEquipmentStore extends Schema.Store, RdfResource {
}

export function OfficeEquipmentStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OfficeEquipmentStoreClass extends StoreMixin(Resource) implements OfficeEquipmentStore {
  }
  return OfficeEquipmentStoreClass
}

class OfficeEquipmentStoreImpl extends OfficeEquipmentStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OfficeEquipmentStore>) {
    super(arg, init)
    this.types.add(schema.OfficeEquipmentStore)
  }

  static readonly __mixins: Mixin[] = [OfficeEquipmentStoreMixin, StoreMixin];
}
OfficeEquipmentStoreMixin.appliesTo = schema.OfficeEquipmentStore
OfficeEquipmentStoreMixin.Class = OfficeEquipmentStoreImpl
