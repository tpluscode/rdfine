import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface CafeOrCoffeeShop extends Schema.FoodEstablishment, RdfResource {
}

export default function CafeOrCoffeeShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CafeOrCoffeeShopClass extends FoodEstablishmentMixin(Resource) implements CafeOrCoffeeShop {
  }
  return CafeOrCoffeeShopClass
}

class CafeOrCoffeeShopImpl extends CafeOrCoffeeShopMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CafeOrCoffeeShop)
  }
}
CafeOrCoffeeShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CafeOrCoffeeShop)
CafeOrCoffeeShopMixin.Class = CafeOrCoffeeShopImpl
