import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface ShoeStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function ShoeStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ShoeStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ShoeStoreClass extends StoreMixin(Resource) implements Partial<ShoeStore> {
  }
  return ShoeStoreClass
}

class ShoeStoreImpl extends ShoeStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShoeStore>) {
    super(arg, init)
    this.types.add(schema.ShoeStore)
  }

  static readonly __mixins: Mixin[] = [ShoeStoreMixin, StoreMixin];
}
ShoeStoreMixin.appliesTo = schema.ShoeStore
ShoeStoreMixin.Class = ShoeStoreImpl

export const fromPointer = createFactory<ShoeStore>([StoreMixin, ShoeStoreMixin], { types: [schema.ShoeStore] });
