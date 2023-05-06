import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { FoodEstablishmentMixin } from './FoodEstablishment.js';

export interface Restaurant<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FoodEstablishment<D>, RdfResource<D> {
}

export function RestaurantMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Restaurant> & RdfResourceCore> & Base {
  @namespace(schema)
  class RestaurantClass extends FoodEstablishmentMixin(Resource) implements Partial<Restaurant> {
  }
  return RestaurantClass
}

class RestaurantImpl extends RestaurantMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Restaurant>) {
    super(arg, init)
    this.types.add(schema.Restaurant)
  }

  static readonly __mixins: Mixin[] = [RestaurantMixin, FoodEstablishmentMixin];
}
RestaurantMixin.appliesTo = schema.Restaurant
RestaurantMixin.Class = RestaurantImpl

export const fromPointer = createFactory<Restaurant>([FoodEstablishmentMixin, RestaurantMixin], { types: [schema.Restaurant] });
