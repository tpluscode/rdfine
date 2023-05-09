import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface Store<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function StoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Store> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class StoreClass extends LocalBusinessMixin(Resource) implements Partial<Store> {
  }
  return StoreClass
}

class StoreImpl extends StoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Store>) {
    super(arg, init)
    this.types.add(schema.Store)
  }

  static readonly __mixins: Mixin[] = [StoreMixin, LocalBusinessMixin];
}
StoreMixin.appliesTo = schema.Store
StoreMixin.Class = StoreImpl

export const fromPointer = createFactory<Store>([LocalBusinessMixin, StoreMixin], { types: [schema.Store] });
