import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntransitiveActivityMixin } from '../lib/IntransitiveActivity';
import { TravelMixin } from '../lib/Travel';

export const TravelBundle = [
  IntransitiveActivityMixin as Mixin,
  TravelMixin as Mixin];
