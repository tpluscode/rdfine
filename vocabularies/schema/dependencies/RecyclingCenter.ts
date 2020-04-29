import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { LocalBusinessMixin } from '../LocalBusiness';
import { RecyclingCenterMixin } from '../RecyclingCenter';

export const RecyclingCenterDependencies = [
  LocalBusinessMixin as Mixin,
  RecyclingCenterMixin as Mixin];
