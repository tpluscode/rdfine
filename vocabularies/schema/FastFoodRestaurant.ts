import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<FastFoodRestaurant>) {
    super(arg, init)
    this.types.add(schema.FastFoodRestaurant)
  }
}
FastFoodRestaurantMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FastFoodRestaurant)
FastFoodRestaurantMixin.Class = FastFoodRestaurantImpl
