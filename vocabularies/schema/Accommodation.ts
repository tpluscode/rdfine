import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PlaceMixin from './Place';

export interface Accommodation extends Schema.Place, RdfResource {
  amenityFeature: Schema.LocationFeatureSpecification;
  floorSize: Schema.QuantitativeValue;
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
  permittedUsage: string;
  petsAllowed: boolean | string;
}

export default function AccommodationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AccommodationClass extends PlaceMixin(Resource) implements Accommodation {
    @property.resource()
    amenityFeature!: Schema.LocationFeatureSpecification;
    @property.resource()
    floorSize!: Schema.QuantitativeValue;
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.numberOfRooms })
    numberOfRoomsLiteral!: number;
    @property.literal()
    permittedUsage!: string;
    @property.literal()
    petsAllowed!: boolean | string;
  }
  return AccommodationClass
}

class AccommodationImpl extends AccommodationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Accommodation)
  }
}
AccommodationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Accommodation)
AccommodationMixin.Class = AccommodationImpl
