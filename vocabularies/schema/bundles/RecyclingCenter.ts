import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../lib/LocalBusiness';
import { RecyclingCenterMixin } from '../lib/RecyclingCenter';

export const RecyclingCenterBundle = [
  LocalBusinessMixin as Mixin,
  RecyclingCenterMixin as Mixin];
