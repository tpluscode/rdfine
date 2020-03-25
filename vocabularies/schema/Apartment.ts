import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AccommodationMixin from './Accommodation';

export interface Apartment extends Schema.Accommodation, RdfResource {
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
  occupancy: Schema.QuantitativeValue;
}

export default function ApartmentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ApartmentClass extends AccommodationMixin(Resource) implements Apartment {
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.numberOfRooms })
    numberOfRoomsLiteral!: number;
    @property.resource()
    occupancy!: Schema.QuantitativeValue;
  }
  return ApartmentClass
}

class ApartmentImpl extends ApartmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Apartment>) {
    super(arg, init)
    this.types.add(schema.Apartment)
  }
}
ApartmentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Apartment)
ApartmentMixin.Class = ApartmentImpl
