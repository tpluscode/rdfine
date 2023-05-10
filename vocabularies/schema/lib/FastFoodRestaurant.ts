import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FoodEstablishmentMixin } from './FoodEstablishment.js';

export interface FastFoodRestaurant<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, rdfine.RdfResource<D> {
}

export function FastFoodRestaurantMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FastFoodRestaurant> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FastFoodRestaurantClass extends FoodEstablishmentMixin(Resource) implements Partial<FastFoodRestaurant> {
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

export const fromPointer = createFactory<FastFoodRestaurant>([FoodEstablishmentMixin, FastFoodRestaurantMixin], { types: [schema.FastFoodRestaurant] });
