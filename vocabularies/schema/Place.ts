import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ThingMixin from './Thing';

export interface Place extends Schema.Thing, RdfResource {
  additionalProperty: Schema.PropertyValue;
  address: Schema.PostalAddress;
  addressLiteral: string;
  aggregateRating: Schema.AggregateRating;
  amenityFeature: Schema.LocationFeatureSpecification;
  branchCode: string;
  containedIn: Place;
  containedInPlace: Place;
  containsPlace: Place;
  event: Schema.Event;
  events: Schema.Event;
  faxNumber: string;
  geo: Schema.GeoCoordinates | Schema.GeoShape;
  geoContains: Place;
  geoCoveredBy: Place;
  geoCovers: Place;
  geoCrosses: Place;
  geoDisjoint: Place;
  geoEquals: Place;
  geoIntersects: Place;
  geoOverlaps: Place;
  geoTouches: Place;
  geoWithin: Place;
  globalLocationNumber: string;
  hasMap: Schema.Map;
  isAccessibleForFree: boolean;
  isicV4: string;
  latitude: number | string;
  logo: Schema.ImageObject;
  longitude: number | string;
  map: rdf.Term;
  maps: rdf.Term;
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

export default function PlaceMixin<Base extends Constructor>(Resource: Base) {
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
    containedIn!: Place;
    @property.resource()
    containedInPlace!: Place;
    @property.resource()
    containsPlace!: Place;
    @property.resource()
    event!: Schema.Event;
    @property.resource()
    events!: Schema.Event;
    @property.literal()
    faxNumber!: string;
    @property.resource()
    geo!: Schema.GeoCoordinates | Schema.GeoShape;
    @property.resource()
    geoContains!: Place;
    @property.resource()
    geoCoveredBy!: Place;
    @property.resource()
    geoCovers!: Place;
    @property.resource()
    geoCrosses!: Place;
    @property.resource()
    geoDisjoint!: Place;
    @property.resource()
    geoEquals!: Place;
    @property.resource()
    geoIntersects!: Place;
    @property.resource()
    geoOverlaps!: Place;
    @property.resource()
    geoTouches!: Place;
    @property.resource()
    geoWithin!: Place;
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
    map!: rdf.Term;
    @property()
    maps!: rdf.Term;
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Place)
  }
}
PlaceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Place)
PlaceMixin.Class = PlaceImpl
