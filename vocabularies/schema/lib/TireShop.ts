import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface TireShop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function TireShopMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TireShop> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TireShopClass extends StoreMixin(Resource) implements Partial<TireShop> {
  }
  return TireShopClass
}

class TireShopImpl extends TireShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TireShop>) {
    super(arg, init)
    this.types.add(schema.TireShop)
  }

  static readonly __mixins: Mixin[] = [TireShopMixin, StoreMixin];
}
TireShopMixin.appliesTo = schema.TireShop
TireShopMixin.Class = TireShopImpl

export const fromPointer = createFactory<TireShop>([StoreMixin, TireShopMixin], { types: [schema.TireShop] });
