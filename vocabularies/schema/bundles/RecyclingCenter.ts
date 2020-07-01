import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { RecyclingCenterMixin } from '../RecyclingCenter';

export const RecyclingCenterBundle = [
  LocalBusinessMixin as Mixin,
  RecyclingCenterMixin as Mixin];
