import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface OfficeEquipmentStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function OfficeEquipmentStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OfficeEquipmentStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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
