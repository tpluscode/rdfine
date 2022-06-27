import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { MediaSubscriptionMixin } from '../lib/MediaSubscription';
import { OfferMixin } from '../lib/Offer';
import { OrganizationMixin } from '../lib/Organization';

export const MediaSubscriptionBundle = [
  IntangibleMixin as Mixin,
  MediaSubscriptionMixin as Mixin,
  OfferMixin as Mixin,
  OrganizationMixin as Mixin];
