import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { LodgingBusinessMixin } from './LodgingBusiness';

export interface Hotel extends Schema.LodgingBusiness, RdfResource {
}

export function HotelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HotelClass extends LodgingBusinessMixin(Resource) implements Hotel {
  }
  return HotelClass
}

class HotelImpl extends HotelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Hotel>) {
    super(arg, init)
    this.types.add(schema.Hotel)
  }
}
HotelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Hotel)
HotelMixin.Class = HotelImpl
