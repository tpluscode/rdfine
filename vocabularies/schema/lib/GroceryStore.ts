import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface GroceryStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function GroceryStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GroceryStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class GroceryStoreClass extends StoreMixin(Resource) implements Partial<GroceryStore> {
  }
  return GroceryStoreClass
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
