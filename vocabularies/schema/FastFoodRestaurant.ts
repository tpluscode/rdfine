import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface FastFoodRestaurant extends Schema.FoodEstablishment, RdfResource {
}

export default function FastFoodRestaurantMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FastFoodRestaurantClass extends FoodEstablishmentMixin(Resource) implements FastFoodRestaurant {
  }
  return FastFoodRestaurantClass
}

class FastFoodRestaurantImpl extends FastFoodRestaurantMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FastFoodRestaurant>) {
    super(arg)
    this.types.add(schema.FastFoodRestaurant)
    initializeProperties(this, init)
  }
}
FastFoodRestaurantMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FastFoodRestaurant)
FastFoodRestaurantMixin.Class = FastFoodRestaurantImpl
