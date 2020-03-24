import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface Brewery extends Schema.FoodEstablishment, RdfResource {
}

export default function BreweryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BreweryClass extends FoodEstablishmentMixin(Resource) implements Brewery {
  }
  return BreweryClass
}

class BreweryImpl extends BreweryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Brewery>) {
    super(arg)
    this.types.add(schema.Brewery)
    initializeProperties(this, init)
  }
}
BreweryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Brewery)
BreweryMixin.Class = BreweryImpl
