import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LodgingBusinessMixin from './LodgingBusiness';

export interface Hotel extends Schema.LodgingBusiness, RdfResource {
}

export default function HotelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HotelClass extends LodgingBusinessMixin(Resource) implements Hotel {
  }
  return HotelClass
}

class HotelImpl extends HotelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Hotel>) {
    super(arg)
    this.types.add(schema.Hotel)
    initializeProperties<Hotel>(this, init)
  }
}
HotelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Hotel)
HotelMixin.Class = HotelImpl
