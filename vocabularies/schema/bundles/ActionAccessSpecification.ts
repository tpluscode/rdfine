import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ActionAccessSpecificationMixin } from '../lib/ActionAccessSpecification';
import { ThingMixin } from '../lib/Thing';
import { GeoShapeMixin } from '../lib/GeoShape';
import { PlaceMixin } from '../lib/Place';
import { OfferMixin } from '../lib/Offer';
import { MediaSubscriptionMixin } from '../lib/MediaSubscription';

export const ActionAccessSpecificationBundle = [
  IntangibleMixin as Mixin,
  ActionAccessSpecificationMixin as Mixin,
  ThingMixin as Mixin,
  GeoShapeMixin as Mixin,
  PlaceMixin as Mixin,
  OfferMixin as Mixin,
  MediaSubscriptionMixin as Mixin];
