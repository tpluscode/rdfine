import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface AnimalShelter extends Schema.LocalBusiness, RdfResource {
}

export default function AnimalShelterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AnimalShelterClass extends LocalBusinessMixin(Resource) implements AnimalShelter {
  }
  return AnimalShelterClass
}

class AnimalShelterImpl extends AnimalShelterMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AnimalShelter)
  }
}
AnimalShelterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AnimalShelter)
AnimalShelterMixin.Class = AnimalShelterImpl
