import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OnlineBusinessMixin } from './OnlineBusiness.js';

export interface OnlineStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.OnlineBusiness<D>, rdfine.RdfResource<D> {
}

export function OnlineStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OnlineStore> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OnlineStoreClass extends OnlineBusinessMixin(Resource) implements Partial<OnlineStore> {
  }
  return OnlineStoreClass
}

class OnlineStoreImpl extends OnlineStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OnlineStore>) {
    super(arg, init)
    this.types.add(schema.OnlineStore)
  }

  static readonly __mixins: Mixin[] = [OnlineStoreMixin, OnlineBusinessMixin];
}
OnlineStoreMixin.appliesTo = schema.OnlineStore
OnlineStoreMixin.Class = OnlineStoreImpl

export const fromPointer = createFactory<OnlineStore>([OnlineBusinessMixin, OnlineStoreMixin], { types: [schema.OnlineStore] });
