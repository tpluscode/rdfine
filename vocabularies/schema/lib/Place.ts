import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Place<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Thing<D>, RdfResource<D> {
  additionalProperty: Schema.PropertyValue<D> | undefined;
  address: Schema.PostalAddress<D> | undefined;
  addressLiteral: string | undefined;
  aggregateRating: Schema.AggregateRating<D> | undefined;
  amenityFeature: Schema.LocationFeatureSpecification<D> | undefined;
  branchCode: string | undefined;
  containedIn: Schema.Place<D> | undefined;
  containedInPlace: Schema.Place<D> | undefined;
  containsPlace: Schema.Place<D> | undefined;
  event: Schema.Event<D> | undefined;
  events: Schema.Event<D> | undefined;
  faxNumber: string | undefined;
  geo: Schema.GeoCoordinates<D> | Schema.GeoShape<D> | undefined;
  geoContains: Schema.Place<D> | undefined;
  geoCoveredBy: Schema.Place<D> | undefined;
  geoCovers: Schema.Place<D> | undefined;
  geoCrosses: Schema.Place<D> | undefined;
  geoDisjoint: Schema.Place<D> | undefined;
  geoEquals: Schema.Place<D> | undefined;
  geoIntersects: Schema.Place<D> | undefined;
  geoOverlaps: Schema.Place<D> | undefined;
  geoTouches: Schema.Place<D> | undefined;
  geoWithin: Schema.Place<D> | undefined;
  globalLocationNumber: string | undefined;
  hasDriveThroughService: boolean | undefined;
  hasMap: Schema.Map<D> | undefined;
  isAccessibleForFree: boolean | undefined;
  'isicV4': string | undefined;
  latitude: number | string | undefined;
  logo: Schema.ImageObject<D> | undefined;
  longitude: number | string | undefined;
  map: RDF.NamedNode | undefined;
  maps: RDF.NamedNode | undefined;
  maximumAttendeeCapacity: number | undefined;
  openingHoursSpecification: Schema.OpeningHoursSpecification<D> | undefined;
  photo: Schema.ImageObject<D> | Schema.Photograph<D> | undefined;
  photos: Schema.ImageObject<D> | Schema.Photograph<D> | undefined;
  publicAccess: boolean | undefined;
  review: Schema.Review<D> | undefined;
  reviews: Schema.Review<D> | undefined;
  slogan: string | undefined;
  smokingAllowed: boolean | undefined;
  specialOpeningHoursSpecification: Schema.OpeningHoursSpecification<D> | undefined;
  telephone: string | undefined;
  tourBookingPage: RDF.NamedNode | undefined;
}

export function PlaceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Place> & RdfResourceCore> & Base {
  @namespace(schema)
  class PlaceClass extends ThingMixin(Resource) implements Partial<Place> {
    @property.resource()
    additionalProperty: Schema.PropertyValue | undefined;
    @property.resource()
    address: Schema.PostalAddress | undefined;
    @property.literal({ path: schema.address })
    addressLiteral: string | undefined;
    @property.resource()
    aggregateRating: Schema.AggregateRating | undefined;
    @property.resource()
    amenityFeature: Schema.LocationFeatureSpecification | undefined;
    @property.literal()
    branchCode: string | undefined;
    @property.resource()
    containedIn: Schema.Place | undefined;
    @property.resource()
    containedInPlace: Schema.Place | undefined;
    @property.resource()
    containsPlace: Schema.Place | undefined;
    @property.resource()
    event: Schema.Event | undefined;
    @property.resource()
    events: Schema.Event | undefined;
    @property.literal()
    faxNumber: string | undefined;
    @property.resource()
    geo: Schema.GeoCoordinates | Schema.GeoShape | undefined;
    @property.resource()
    geoContains: Schema.Place | undefined;
    @property.resource()
    geoCoveredBy: Schema.Place | undefined;
    @property.resource()
    geoCovers: Schema.Place | undefined;
    @property.resource()
    geoCrosses: Schema.Place | undefined;
    @property.resource()
    geoDisjoint: Schema.Place | undefined;
    @property.resource()
    geoEquals: Schema.Place | undefined;
    @property.resource()
    geoIntersects: Schema.Place | undefined;
    @property.resource()
    geoOverlaps: Schema.Place | undefined;
    @property.resource()
    geoTouches: Schema.Place | undefined;
    @property.resource()
    geoWithin: Schema.Place | undefined;
    @property.literal()
    globalLocationNumber: string | undefined;
    @property.literal({ type: Boolean })
    hasDriveThroughService: boolean | undefined;
    @property.resource()
    hasMap: Schema.Map | undefined;
    @property.literal({ type: Boolean })
    isAccessibleForFree: boolean | undefined;
    @property.literal()
    'isicV4': string | undefined;
    @property.literal()
    latitude: number | string | undefined;
    @property.resource()
    logo: Schema.ImageObject | undefined;
    @property.literal()
    longitude: number | string | undefined;
    @property()
    map: RDF.NamedNode | undefined;
    @property()
    maps: RDF.NamedNode | undefined;
    @property.literal({ type: Number })
    maximumAttendeeCapacity: number | undefined;
    @property.resource()
    openingHoursSpecification: Schema.OpeningHoursSpecification | undefined;
    @property.resource()
    photo: Schema.ImageObject | Schema.Photograph | undefined;
    @property.resource()
    photos: Schema.ImageObject | Schema.Photograph | undefined;
    @property.literal({ type: Boolean })
    publicAccess: boolean | undefined;
    @property.resource()
    review: Schema.Review | undefined;
    @property.resource()
    reviews: Schema.Review | undefined;
    @property.literal()
    slogan: string | undefined;
    @property.literal({ type: Boolean })
    smokingAllowed: boolean | undefined;
    @property.resource()
    specialOpeningHoursSpecification: Schema.OpeningHoursSpecification | undefined;
    @property.literal()
    telephone: string | undefined;
    @property()
    tourBookingPage: RDF.NamedNode | undefined;
  }
  return PlaceClass
}

class PlaceImpl extends PlaceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Place>) {
    super(arg, init)
    this.types.add(schema.Place)
  }

  static readonly __mixins: Mixin[] = [PlaceMixin, ThingMixin];
}
PlaceMixin.appliesTo = schema.Place
PlaceMixin.Class = PlaceImpl

export const fromPointer = createFactory<Place>([ThingMixin, PlaceMixin], { types: [schema.Place] });
