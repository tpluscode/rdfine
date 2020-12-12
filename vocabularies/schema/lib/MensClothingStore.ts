import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface MensClothingStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function MensClothingStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MensClothingStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class MensClothingStoreClass extends StoreMixin(Resource) implements Partial<MensClothingStore> {
  }
  return MensClothingStoreClass
}

class MensClothingStoreImpl extends MensClothingStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MensClothingStore>) {
    super(arg, init)
    this.types.add(schema.MensClothingStore)
  }

  static readonly __mixins: Mixin[] = [MensClothingStoreMixin, StoreMixin];
}
MensClothingStoreMixin.appliesTo = schema.MensClothingStore
MensClothingStoreMixin.Class = MensClothingStoreImpl

export const fromPointer = createFactory<MensClothingStore>([StoreMixin, MensClothingStoreMixin], { types: [schema.MensClothingStore] });
