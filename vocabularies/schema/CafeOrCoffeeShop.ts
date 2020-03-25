import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<CafeOrCoffeeShop>) {
    super(arg)
    this.types.add(schema.CafeOrCoffeeShop)
    initializeProperties<CafeOrCoffeeShop>(this, init)
  }
}
CafeOrCoffeeShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CafeOrCoffeeShop)
CafeOrCoffeeShopMixin.Class = CafeOrCoffeeShopImpl
