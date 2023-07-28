import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface WholesaleStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function WholesaleStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<WholesaleStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WholesaleStoreClass extends StoreMixin(Resource) {
  }
  return WholesaleStoreClass as any
}

class WholesaleStoreImpl extends WholesaleStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WholesaleStore>) {
    super(arg, init)
    this.types.add(schema.WholesaleStore)
  }

  static readonly __mixins: Mixin[] = [WholesaleStoreMixin, StoreMixin];
}
WholesaleStoreMixin.appliesTo = schema.WholesaleStore
WholesaleStoreMixin.Class = WholesaleStoreImpl

export const fromPointer = createFactory<WholesaleStore>([StoreMixin, WholesaleStoreMixin], { types: [schema.WholesaleStore] });
