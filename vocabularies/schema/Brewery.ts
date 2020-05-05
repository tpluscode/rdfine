import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface Brewery extends Schema.FoodEstablishment, RdfResource {
}

export function BreweryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BreweryClass extends FoodEstablishmentMixin(Resource) implements Brewery {
  }
  return BreweryClass
}

class BreweryImpl extends BreweryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Brewery>) {
    super(arg, init)
    this.types.add(schema.Brewery)
  }

  static readonly __mixins: Mixin[] = [BreweryMixin, FoodEstablishmentMixin];
}
BreweryMixin.appliesTo = schema.Brewery
BreweryMixin.Class = BreweryImpl
