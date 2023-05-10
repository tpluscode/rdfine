import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface FurnitureStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function FurnitureStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FurnitureStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FurnitureStoreClass extends StoreMixin(Resource) implements Partial<FurnitureStore> {
  }
  return FurnitureStoreClass
}

class FurnitureStoreImpl extends FurnitureStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FurnitureStore>) {
    super(arg, init)
    this.types.add(schema.FurnitureStore)
  }

  static readonly __mixins: Mixin[] = [FurnitureStoreMixin, StoreMixin];
}
FurnitureStoreMixin.appliesTo = schema.FurnitureStore
FurnitureStoreMixin.Class = FurnitureStoreImpl

export const fromPointer = createFactory<FurnitureStore>([StoreMixin, FurnitureStoreMixin], { types: [schema.FurnitureStore] });
