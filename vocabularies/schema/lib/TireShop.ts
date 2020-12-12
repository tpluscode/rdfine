import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface TireShop<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function TireShopMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TireShop> & RdfResourceCore> & Base {
  @namespace(schema)
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
