import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface GroceryStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function GroceryStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GroceryStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GroceryStoreClass extends StoreMixin(Resource) {
  }
  return GroceryStoreClass as any
}

class GroceryStoreImpl extends GroceryStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GroceryStore>) {
    super(arg, init)
    this.types.add(schema.GroceryStore)
  }

  static readonly __mixins: Mixin[] = [GroceryStoreMixin, StoreMixin];
}
GroceryStoreMixin.appliesTo = schema.GroceryStore
GroceryStoreMixin.Class = GroceryStoreImpl

export const fromPointer = createFactory<GroceryStore>([StoreMixin, GroceryStoreMixin], { types: [schema.GroceryStore] });
