import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface OfficeEquipmentStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function OfficeEquipmentStoreMixin<Base extends Constructor>(Resource: Base): Constructor<OfficeEquipmentStore> & Base {
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
