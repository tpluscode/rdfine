import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../Thing';
import { PlaceMixin } from '../Place';
import { PropertyValueMixin } from '../PropertyValue';
import { PostalAddressMixin } from '../PostalAddress';
import { AggregateRatingMixin } from '../AggregateRating';
import { LocationFeatureSpecificationMixin } from '../LocationFeatureSpecification';
import { EventMixin } from '../Event';
import { GeoCoordinatesMixin } from '../GeoCoordinates';
import { GeoShapeMixin } from '../GeoShape';
import { MapMixin } from '../Map';
import { ImageObjectMixin } from '../ImageObject';
import { OpeningHoursSpecificationMixin } from '../OpeningHoursSpecification';
import { PhotographMixin } from '../Photograph';
import { ReviewMixin } from '../Review';

export const PlaceBundle = [
  ThingMixin as Mixin,
  PlaceMixin as Mixin,
  PropertyValueMixin as Mixin,
  PostalAddressMixin as Mixin,
  AggregateRatingMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  EventMixin as Mixin,
  GeoCoordinatesMixin as Mixin,
  GeoShapeMixin as Mixin,
  MapMixin as Mixin,
  ImageObjectMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  PhotographMixin as Mixin,
  ReviewMixin as Mixin];
