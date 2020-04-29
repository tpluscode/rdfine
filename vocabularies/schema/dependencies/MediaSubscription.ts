import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { MediaSubscriptionMixin } from '../MediaSubscription';
import { OrganizationMixin } from '../Organization';
import { OfferMixin } from '../Offer';

export const MediaSubscriptionDependencies = [
  IntangibleMixin as Mixin,
  MediaSubscriptionMixin as Mixin,
  OrganizationMixin as Mixin,
  OfferMixin as Mixin];
