import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { MediaSubscriptionMixin } from '../lib/MediaSubscription';
import { OrganizationMixin } from '../lib/Organization';
import { OfferMixin } from '../lib/Offer';

export const MediaSubscriptionBundle = [
  IntangibleMixin as Mixin,
  MediaSubscriptionMixin as Mixin,
  OrganizationMixin as Mixin,
  OfferMixin as Mixin];
