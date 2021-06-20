import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface FastFoodRestaurant<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function FastFoodRestaurantMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FastFoodRestaurant> & RdfResourceCore> & Base {
  @namespace(schema)
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
