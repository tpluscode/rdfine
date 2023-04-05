import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface OfficeEquipmentStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function OfficeEquipmentStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OfficeEquipmentStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class OfficeEquipmentStoreClass extends StoreMixin(Resource) implements Partial<OfficeEquipmentStore> {
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

export const fromPointer = createFactory<OfficeEquipmentStore>([StoreMixin, OfficeEquipmentStoreMixin], { types: [schema.OfficeEquipmentStore] });
