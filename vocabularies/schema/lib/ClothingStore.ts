import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface ClothingStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function ClothingStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ClothingStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class ClothingStoreClass extends StoreMixin(Resource) implements Partial<ClothingStore> {
  }
  return ClothingStoreClass
}

class ClothingStoreImpl extends ClothingStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ClothingStore>) {
    super(arg, init)
    this.types.add(schema.ClothingStore)
  }

  static readonly __mixins: Mixin[] = [ClothingStoreMixin, StoreMixin];
}
ClothingStoreMixin.appliesTo = schema.ClothingStore
ClothingStoreMixin.Class = ClothingStoreImpl

export const fromPointer = createFactory<ClothingStore>([StoreMixin, ClothingStoreMixin], { types: [schema.ClothingStore] });
