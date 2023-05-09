import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface ToyStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function ToyStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ToyStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ToyStoreClass extends StoreMixin(Resource) implements Partial<ToyStore> {
  }
  return ToyStoreClass
}

class ToyStoreImpl extends ToyStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ToyStore>) {
    super(arg, init)
    this.types.add(schema.ToyStore)
  }

  static readonly __mixins: Mixin[] = [ToyStoreMixin, StoreMixin];
}
ToyStoreMixin.appliesTo = schema.ToyStore
ToyStoreMixin.Class = ToyStoreImpl

export const fromPointer = createFactory<ToyStore>([StoreMixin, ToyStoreMixin], { types: [schema.ToyStore] });
