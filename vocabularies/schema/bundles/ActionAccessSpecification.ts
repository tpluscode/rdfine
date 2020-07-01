import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ActionAccessSpecificationMixin } from '../ActionAccessSpecification';
import { ThingMixin } from '../Thing';
import { GeoShapeMixin } from '../GeoShape';
import { PlaceMixin } from '../Place';
import { OfferMixin } from '../Offer';
import { MediaSubscriptionMixin } from '../MediaSubscription';

export const ActionAccessSpecificationBundle = [
  IntangibleMixin as Mixin,
  ActionAccessSpecificationMixin as Mixin,
  ThingMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  OfferMixin as Mixin,
  MediaSubscriptionMixin as Mixin];
