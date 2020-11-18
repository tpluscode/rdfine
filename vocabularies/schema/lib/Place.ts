import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Place<ID extends ResourceNode = ResourceNode> extends Schema.Thing<ID>, RdfResource<ID> {
  additionalProperty: Schema.PropertyValue<SiblingNode<ID>> | undefined;
  address: Schema.PostalAddress<SiblingNode<ID>> | undefined;
  addressLiteral: string | undefined;
  aggregateRating: Schema.AggregateRating<SiblingNode<ID>> | undefined;
  amenityFeature: Schema.LocationFeatureSpecification<SiblingNode<ID>> | undefined;
  branchCode: string | undefined;
  containedIn: Schema.Place<SiblingNode<ID>> | undefined;
  containedInPlace: Schema.Place<SiblingNode<ID>> | undefined;
  containsPlace: Schema.Place<SiblingNode<ID>> | undefined;
  event: Schema.Event<SiblingNode<ID>> | undefined;
  events: Schema.Event<SiblingNode<ID>> | undefined;
  faxNumber: string | undefined;
  geo: Schema.GeoCoordinates<SiblingNode<ID>> | Schema.GeoShape<SiblingNode<ID>> | undefined;
  geoContains: Schema.Place<SiblingNode<ID>> | undefined;
  geoCoveredBy: Schema.Place<SiblingNode<ID>> | undefined;
  geoCovers: Schema.Place<SiblingNode<ID>> | undefined;
  geoCrosses: Schema.Place<SiblingNode<ID>> | undefined;
  geoDisjoint: Schema.Place<SiblingNode<ID>> | undefined;
  geoEquals: Schema.Place<SiblingNode<ID>> | undefined;
  geoIntersects: Schema.Place<SiblingNode<ID>> | undefined;
  geoOverlaps: Schema.Place<SiblingNode<ID>> | undefined;
  geoTouches: Schema.Place<SiblingNode<ID>> | undefined;
  geoWithin: Schema.Place<SiblingNode<ID>> | undefined;
  globalLocationNumber: string | undefined;
  hasDriveThroughService: boolean | undefined;
  hasMap: Schema.Map<SiblingNode<ID>> | undefined;
  isAccessibleForFree: boolean | undefined;
  'isicV4': string | undefined;
  latitude: number | string | undefined;
  logo: Schema.ImageObject<SiblingNode<ID>> | undefined;
  longitude: number | string | undefined;
  map: RDF.NamedNode | undefined;
  maps: RDF.NamedNode | undefined;
  maximumAttendeeCapacity: number | undefined;
  openingHoursSpecification: Schema.OpeningHoursSpecification<SiblingNode<ID>> | undefined;
  photo: Schema.ImageObject<SiblingNode<ID>> | Schema.Photograph<SiblingNode<ID>> | undefined;
  photos: Schema.ImageObject<SiblingNode<ID>> | Schema.Photograph<SiblingNode<ID>> | undefined;
  publicAccess: boolean | undefined;
  review: Schema.Review<SiblingNode<ID>> | undefined;
  reviews: Schema.Review<SiblingNode<ID>> | undefined;
  slogan: string | undefined;
  smokingAllowed: boolean | undefined;
  specialOpeningHoursSpecification: Schema.OpeningHoursSpecification<SiblingNode<ID>> | undefined;
  telephone: string | undefined;
  tourBookingPage: RDF.NamedNode | undefined;
}

export function PlaceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlaceClass extends ThingMixin(Resource) implements Place {
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
