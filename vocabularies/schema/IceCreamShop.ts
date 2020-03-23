import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface IceCreamShop extends Schema.FoodEstablishment, RdfResource {
}

export default function IceCreamShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class IceCreamShopClass extends FoodEstablishmentMixin(Resource) implements IceCreamShop {
  }
  return IceCreamShopClass
}

class IceCreamShopImpl extends IceCreamShopMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.IceCreamShop)
  }
}
IceCreamShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.IceCreamShop)
IceCreamShopMixin.Class = IceCreamShopImpl
