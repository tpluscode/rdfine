import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface OutletStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function OutletStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OutletStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OutletStoreClass extends StoreMixin(Resource) {
  }
  return OutletStoreClass as any
}

class OutletStoreImpl extends OutletStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OutletStore>) {
    super(arg, init)
    this.types.add(schema.OutletStore)
  }

  static readonly __mixins: Mixin[] = [OutletStoreMixin, StoreMixin];
}
OutletStoreMixin.appliesTo = schema.OutletStore
OutletStoreMixin.Class = OutletStoreImpl

export const fromPointer = createFactory<OutletStore>([StoreMixin, OutletStoreMixin], { types: [schema.OutletStore] });
