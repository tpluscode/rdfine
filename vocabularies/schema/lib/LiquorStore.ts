import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface LiquorStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function LiquorStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LiquorStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LiquorStoreClass extends StoreMixin(Resource) {
  }
  return LiquorStoreClass as any
}

class LiquorStoreImpl extends LiquorStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LiquorStore>) {
    super(arg, init)
    this.types.add(schema.LiquorStore)
  }

  static readonly __mixins: Mixin[] = [LiquorStoreMixin, StoreMixin];
}
LiquorStoreMixin.appliesTo = schema.LiquorStore
LiquorStoreMixin.Class = LiquorStoreImpl

export const fromPointer = createFactory<LiquorStore>([StoreMixin, LiquorStoreMixin], { types: [schema.LiquorStore] });
