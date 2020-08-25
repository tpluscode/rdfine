import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlaceMixin } from './Place';

export interface Accommodation extends Schema.Place, RdfResource {
  amenityFeature: Schema.LocationFeatureSpecification;
  floorSize: Schema.QuantitativeValue;
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
  permittedUsage: string;
  petsAllowed: boolean | string;
}

export function AccommodationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AccommodationClass extends PlaceMixin(Resource) implements Accommodation {
    @property.resource()
    amenityFeature!: Schema.LocationFeatureSpecification;
    @property.resource()
    floorSize!: Schema.QuantitativeValue;
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral!: number;
    @property.literal()
    permittedUsage!: string;
    @property.literal()
    petsAllowed!: boolean | string;
  }
  return AccommodationClass
}

class AccommodationImpl extends AccommodationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Accommodation>) {
    super(arg, init)
    this.types.add(schema.Accommodation)
  }

  static readonly __mixins: Mixin[] = [AccommodationMixin, PlaceMixin];
}
AccommodationMixin.appliesTo = schema.Accommodation
AccommodationMixin.Class = AccommodationImpl
