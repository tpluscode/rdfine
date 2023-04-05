import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { AggregateRatingMixin } from '../lib/AggregateRating';
import { EventMixin } from '../lib/Event';
import { GeoCoordinatesMixin } from '../lib/GeoCoordinates';
import { GeoShapeMixin } from '../lib/GeoShape';
import { ImageObjectMixin } from '../lib/ImageObject';
import { LocationFeatureSpecificationMixin } from '../lib/LocationFeatureSpecification';
import { MapMixin } from '../lib/Map';
import { OpeningHoursSpecificationMixin } from '../lib/OpeningHoursSpecification';
import { PhotographMixin } from '../lib/Photograph';
import { PlaceMixin } from '../lib/Place';
import { PostalAddressMixin } from '../lib/PostalAddress';
import { PropertyValueMixin } from '../lib/PropertyValue';
import { ReviewMixin } from '../lib/Review';
import { ThingMixin } from '../lib/Thing';

export const PlaceBundle = [
  AggregateRatingMixin as Mixin,
  EventMixin as Mixin,
  GeoCoordinatesMixin as Mixin,
  GeoShapeMixin as Mixin,
  ImageObjectMixin as Mixin,
  LocationFeatureSpecificationMixin as Mixin,
  MapMixin as Mixin,
  OpeningHoursSpecificationMixin as Mixin,
  PhotographMixin as Mixin,
  PlaceMixin as Mixin,
  PostalAddressMixin as Mixin,
  PropertyValueMixin as Mixin,
  ReviewMixin as Mixin,
  ThingMixin as Mixin];
