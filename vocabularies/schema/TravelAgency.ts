import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface TravelAgency extends Schema.LocalBusiness, RdfResource {
}

export default function TravelAgencyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TravelAgencyClass extends LocalBusinessMixin(Resource) implements TravelAgency {
  }
  return TravelAgencyClass
}

class TravelAgencyImpl extends TravelAgencyMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TravelAgency)
  }
}
TravelAgencyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TravelAgency)
TravelAgencyMixin.Class = TravelAgencyImpl
