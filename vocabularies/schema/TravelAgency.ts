import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<TravelAgency>) {
    super(arg)
    this.types.add(schema.TravelAgency)
    initializeProperties(this, init)
  }
}
TravelAgencyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TravelAgency)
TravelAgencyMixin.Class = TravelAgencyImpl
