import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface FastFoodRestaurant<ID extends ResourceNode = ResourceNode> extends Schema.FoodEstablishment<ID>, RdfResource<ID> {
}

export function FastFoodRestaurantMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [FastFoodRestaurantMixin, FoodEstablishmentMixin];
}
FastFoodRestaurantMixin.appliesTo = schema.FastFoodRestaurant
FastFoodRestaurantMixin.Class = FastFoodRestaurantImpl
