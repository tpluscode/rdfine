import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionAccessSpecificationMixin } from '../lib/ActionAccessSpecification';
import { GeoShapeMixin } from '../lib/GeoShape';
import { IntangibleMixin } from '../lib/Intangible';
import { MediaSubscriptionMixin } from '../lib/MediaSubscription';
import { OfferMixin } from '../lib/Offer';
import { PlaceMixin } from '../lib/Place';
import { ThingMixin } from '../lib/Thing';

export const ActionAccessSpecificationBundle = [
  ActionAccessSpecificationMixin as Mixin,
  GeoShapeMixin as Mixin,
  IntangibleMixin as Mixin,
  MediaSubscriptionMixin as Mixin,
  OfferMixin as Mixin,
  PlaceMixin as Mixin,
  ThingMixin as Mixin];
