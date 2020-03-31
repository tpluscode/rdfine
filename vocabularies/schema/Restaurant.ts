import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface Restaurant extends Schema.FoodEstablishment, RdfResource {
}

export default function RestaurantMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RestaurantClass extends FoodEstablishmentMixin(Resource) implements Restaurant {
  }
  return RestaurantClass
}

class RestaurantImpl extends RestaurantMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Restaurant>) {
    super(arg, init)
    this.types.add(schema.Restaurant)
  }
}
RestaurantMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Restaurant)
RestaurantMixin.Class = RestaurantImpl
