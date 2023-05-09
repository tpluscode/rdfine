import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface MensClothingStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function MensClothingStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MensClothingStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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
