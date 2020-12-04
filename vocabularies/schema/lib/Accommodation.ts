import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceMixin } from './Place';

export interface Accommodation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
  accommodationCategory: string | undefined;
  accommodationFloorPlan: Schema.FloorPlan<D> | undefined;
  amenityFeature: Schema.LocationFeatureSpecification<D> | undefined;
  floorLevel: string | undefined;
  floorSize: Schema.QuantitativeValue<D> | undefined;
  leaseLength: Schema.Duration<D> | Schema.QuantitativeValue<D> | undefined;
  numberOfBathroomsTotal: number | undefined;
  numberOfBedrooms: Schema.QuantitativeValue<D> | undefined;
  numberOfBedroomsLiteral: number | undefined;
  numberOfFullBathrooms: number | undefined;
  numberOfPartialBathrooms: number | undefined;
  numberOfRooms: Schema.QuantitativeValue<D> | undefined;
  numberOfRoomsLiteral: number | undefined;
  permittedUsage: string | undefined;
  petsAllowed: boolean | string | undefined;
  tourBookingPage: RDF.NamedNode | undefined;
  yearBuilt: number | undefined;
}

export function AccommodationMixin<Base extends Constructor>(Resource: Base): Constructor<Accommodation> & Base {
  @namespace(schema)
  class AccommodationClass extends PlaceMixin(Resource) implements Accommodation {
    @property.literal()
    accommodationCategory: string | undefined;
    @property.resource()
    accommodationFloorPlan: Schema.FloorPlan | undefined;
    @property.resource()
    amenityFeature: Schema.LocationFeatureSpecification | undefined;
    @property.literal()
    floorLevel: string | undefined;
    @property.resource()
    floorSize: Schema.QuantitativeValue | undefined;
    @property.resource()
    leaseLength: Schema.Duration | Schema.QuantitativeValue | undefined;
    @property.literal({ type: Number })
    numberOfBathroomsTotal: number | undefined;
    @property.resource()
    numberOfBedrooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfBedrooms, type: Number })
    numberOfBedroomsLiteral: number | undefined;
    @property.literal({ type: Number })
    numberOfFullBathrooms: number | undefined;
    @property.literal({ type: Number })
    numberOfPartialBathrooms: number | undefined;
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @property.literal()
    permittedUsage: string | undefined;
    @property.literal()
    petsAllowed: boolean | string | undefined;
    @property()
    tourBookingPage: RDF.NamedNode | undefined;
    @property.literal({ type: Number })
    yearBuilt: number | undefined;
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
