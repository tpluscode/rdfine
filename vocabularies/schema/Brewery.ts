import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Brewery)
  }
}
BreweryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Brewery)
BreweryMixin.Class = BreweryImpl
