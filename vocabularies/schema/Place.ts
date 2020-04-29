import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ThingMixin } from './Thing';

export interface Place extends Schema.Thing, RdfResource {
  additionalProperty: Schema.PropertyValue;
  address: Schema.PostalAddress;
  addressLiteral: string;
  aggregateRating: Schema.AggregateRating;
  amenityFeature: Schema.LocationFeatureSpecification;
  branchCode: string;
  containedIn: Schema.Place;
  containedInPlace: Schema.Place;
  containsPlace: Schema.Place;
  event: Schema.Event;
  events: Schema.Event;
  faxNumber: string;
  geo: Schema.GeoCoordinates | Schema.GeoShape;
  geoContains: Schema.Place;
  geoCoveredBy: Schema.Place;
  geoCovers: Schema.Place;
  geoCrosses: Schema.Place;
  geoDisjoint: Schema.Place;
  geoEquals: Schema.Place;
  geoIntersects: Schema.Place;
  geoOverlaps: Schema.Place;
  geoTouches: Schema.Place;
  geoWithin: Schema.Place;
  globalLocationNumber: string;
  hasMap: Schema.Map;
  isAccessibleForFree: boolean;
  isicV4: string;
  latitude: number | string;
  logo: Schema.ImageObject;
  longitude: number | string;
  map: RDF.NamedNode;
  maps: RDF.NamedNode;
  maximumAttendeeCapacity: number;
  openingHoursSpecification: Schema.OpeningHoursSpecification;
  photo: Schema.ImageObject | Schema.Photograph;
  photos: Schema.ImageObject | Schema.Photograph;
  publicAccess: boolean;
  review: Schema.Review;
  reviews: Schema.Review;
  slogan: string;
  smokingAllowed: boolean;
  specialOpeningHoursSpecification: Schema.OpeningHoursSpecification;
  telephone: string;
}

export function PlaceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlaceClass extends ThingMixin(Resource) implements Place {
    @property.resource()
    additionalProperty!: Schema.PropertyValue;
    @property.resource()
    address!: Schema.PostalAddress;
    @property.literal({ path: schema.address })
    addressLiteral!: string;
    @property.resource()
    aggregateRating!: Schema.AggregateRating;
    @property.resource()
    amenityFeature!: Schema.LocationFeatureSpecification;
    @property.literal()
    branchCode!: string;
    @property.resource()
    containedIn!: Schema.Place;
    @property.resource()
    containedInPlace!: Schema.Place;
    @property.resource()
    containsPlace!: Schema.Place;
    @property.resource()
    event!: Schema.Event;
    @property.resource()
    events!: Schema.Event;
    @property.literal()
    faxNumber!: string;
    @property.resource()
    geo!: Schema.GeoCoordinates | Schema.GeoShape;
    @property.resource()
    geoContains!: Schema.Place;
    @property.resource()
    geoCoveredBy!: Schema.Place;
    @property.resource()
    geoCovers!: Schema.Place;
    @property.resource()
    geoCrosses!: Schema.Place;
    @property.resource()
    geoDisjoint!: Schema.Place;
    @property.resource()
    geoEquals!: Schema.Place;
    @property.resource()
    geoIntersects!: Schema.Place;
    @property.resource()
    geoOverlaps!: Schema.Place;
    @property.resource()
    geoTouches!: Schema.Place;
    @property.resource()
    geoWithin!: Schema.Place;
    @property.literal()
    globalLocationNumber!: string;
    @property.resource()
    hasMap!: Schema.Map;
    @property.literal({ type: Boolean })
    isAccessibleForFree!: boolean;
    @property.literal()
    isicV4!: string;
    @property.literal()
    latitude!: number | string;
    @property.resource()
    logo!: Schema.ImageObject;
    @property.literal()
    longitude!: number | string;
    @property()
    map!: RDF.NamedNode;
    @property()
    maps!: RDF.NamedNode;
    @property.literal({ type: Number })
    maximumAttendeeCapacity!: number;
    @property.resource()
    openingHoursSpecification!: Schema.OpeningHoursSpecification;
    @property.resource()
    photo!: Schema.ImageObject | Schema.Photograph;
    @property.resource()
    photos!: Schema.ImageObject | Schema.Photograph;
    @property.literal({ type: Boolean })
    publicAccess!: boolean;
    @property.resource()
    review!: Schema.Review;
    @property.resource()
    reviews!: Schema.Review;
    @property.literal()
    slogan!: string;
    @property.literal({ type: Boolean })
    smokingAllowed!: boolean;
    @property.resource()
    specialOpeningHoursSpecification!: Schema.OpeningHoursSpecification;
    @property.literal()
    telephone!: string;
  }
  return PlaceClass
}

class PlaceImpl extends PlaceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Place>) {
    super(arg, init)
    this.types.add(schema.Place)
  }
}
PlaceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Place)
PlaceMixin.Class = PlaceImpl
