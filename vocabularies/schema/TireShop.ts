import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface TireShop extends Schema.Store, RdfResource {
}

export default function TireShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TireShopClass extends StoreMixin(Resource) implements TireShop {
  }
  return TireShopClass
}

class TireShopImpl extends TireShopMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TireShop)
  }
}
TireShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TireShop)
TireShopMixin.Class = TireShopImpl
