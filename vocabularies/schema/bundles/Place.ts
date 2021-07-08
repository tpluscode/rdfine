import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ThingMixin } from '../lib/Thing';
import { PlaceMixin } from '../lib/Place';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { EventMixin } from '../lib/Event';
import { GeoShapeMixin } from '../lib/GeoShape';
import { GeoCoordinatesMixin } from '../lib/GeoCoordinates';
import { MapMixin } from '../lib/Map';
import { ImageObjectMixin } from '../lib/ImageObject';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { PhotographMixin } from '../lib/Photograph';
import { ReviewMixin } from '../lib/Review';

export const PlaceBundle = [
  ThingMixin as Mixin,
  PlaceMixin as Mixin,
  PropertyValueMixin as Mixin,
  PostalAddressMixin as Mixin,
  AggregateRatingMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  EventMixin as Mixin,
  GeoShapeMixin as Mixin,
  GeoCoordinatesMixin as Mixin,
  MapMixin as Mixin,
  ImageObjectMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  PhotographMixin as Mixin,
  ReviewMixin as Mixin];
