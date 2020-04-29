import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface CafeOrCoffeeShop extends Schema.FoodEstablishment, RdfResource {
}

export function CafeOrCoffeeShopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CafeOrCoffeeShopClass extends FoodEstablishmentMixin(Resource) implements CafeOrCoffeeShop {
  }
  return CafeOrCoffeeShopClass
}

class CafeOrCoffeeShopImpl extends CafeOrCoffeeShopMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CafeOrCoffeeShop>) {
    super(arg, init)
    this.types.add(schema.CafeOrCoffeeShop)
  }
}
CafeOrCoffeeShopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CafeOrCoffeeShop)
CafeOrCoffeeShopMixin.Class = CafeOrCoffeeShopImpl
